import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebSocketService } from './web-socket-service.service'; 
@Component({
  selector: 'app-louay',
  templateUrl: './louay.component.html',
  styleUrls: ['./louay.component.css'] // Le bon nom de la propriété est styleUrls
})
export class LouayComponent {
  imageName: string | undefined;
  selectedFile: File | undefined;

  constructor(private http: HttpClient,private webSocketService: WebSocketService) {}
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  showVideo: boolean = false;



  toggleVideo() {
    this.showVideo = !this.showVideo;
    if (!this.showVideo) {
      this.videoElement.nativeElement.pause();
      if (this.videoElement?.nativeElement?.srcObject) {
        (this.videoElement.nativeElement.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
    }
  }


  onSubmit() {
    const formData = new FormData();
    if (this.imageName !== undefined && this.selectedFile !== undefined) {
      formData.append('name', this.imageName);
      formData.append('image', this.selectedFile, this.selectedFile.name);

      this.http.post<any>('http://localhost:5001/faces', formData).subscribe(
        response => {
          console.log(response);
          // Traitez la réponse ici si nécessaire
        },
        error => {
          console.error('Error uploading image:', error);
          // Gérez l'erreur ici si nécessaire
        }
      );
    } else {
      console.error('Image name or file is undefined.');
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }


  startVideo() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
        this.videoElement.nativeElement.style.display = 'block'; 
      })
      .catch(err => {
        console.error("Error: ", err);
      });
  }


  
}
