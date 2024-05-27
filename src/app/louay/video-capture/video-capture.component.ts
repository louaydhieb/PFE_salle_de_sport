import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { WebSocketService } from '../web-socket-service.service';

interface Face {
  top: number;
  right: number;
  bottom: number;
  left: number;
  recognized: boolean;
  name?: string;
}

@Component({
  selector: 'app-video-capture',
  templateUrl: './video-capture.component.html',
  styleUrls: ['./video-capture.component.css']
})
export class VideoCaptureComponent implements AfterViewInit {
  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('overlayElement', { static: false }) overlayElement!: ElementRef<HTMLCanvasElement>;

  constructor(private webSocketService: WebSocketService) {}

  ngAfterViewInit(): void {
    this.setupVideoStream();
    this.listenForFaces();
  }

  private setupVideoStream(): void {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (this.videoElement && this.videoElement.nativeElement) {
          this.videoElement.nativeElement.srcObject = stream;
          this.videoElement.nativeElement.play().then(() => {
            this.startSendingFrames();
          });
        }
      }).catch(err => console.error("Error starting video stream: ", err));
  }

  private startSendingFrames(): void {
    const interval = setInterval(() => {
      if (!this.videoElement || !this.videoElement.nativeElement) {
        console.error("Video element not ready.");
        clearInterval(interval);
        return;
      }

      const video: HTMLVideoElement = this.videoElement.nativeElement;
      const canvas: HTMLCanvasElement = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');

      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frame = canvas.toDataURL('image/jpeg');
        this.webSocketService.sendFrame(frame);
      }
    }, 100); 
  }

  private listenForFaces(): void {
    this.webSocketService.onFacesDetected((data: any) => {
      const faces: Face[] = data.faces;
  
      const overlay: HTMLCanvasElement = this.overlayElement.nativeElement;
      const context = overlay.getContext('2d');
      if (context) {
        context.clearRect(0, 0, overlay.width, overlay.height);
        faces.forEach(face => {
          const { top, right, bottom, left, recognized, name } = face;
  
         
          context.strokeStyle = recognized ? 'green' : 'red';
          context.lineWidth = 2;
          
         
          context.beginPath();
          context.strokeRect(left, top, right - left, bottom - top);
          context.closePath();
  
          if (recognized && name) {
          
            context.font = '16px Arial';
            context.fillStyle = 'green';
            
           
            const textWidth = context.measureText(name).width;
            const textX = left + ((right - left) - textWidth) / 2;
            const textY = top - 5; 
  
            
            context.fillText(name, textX, textY);
          }
        });
      }
    });
  }

}
