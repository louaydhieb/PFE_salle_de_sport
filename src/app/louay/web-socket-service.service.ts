import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { io,Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket!: Socket;
  private messagesSubject = new Subject<any>();
  public messages$: Observable<any> = this.messagesSubject.asObservable();

  constructor() {
    this.connect();
  }

  private connect(): void {
    // Connect to Socket.IO server
    this.socket = io('http://localhost:5001', {
     
      path: '/socket.io/', 
      transports: ['websocket'],
    });

    this.socket.on('message', (message) => {
      this.messagesSubject.next(message);
    });

    this.socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });
    this.socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });
  }


  public sendFrame(frameData: any): void {
    // Send frame data to the server
    this.socket.emit('frame', { frame: frameData });
  }

  public getMessages(): Observable<any> {
    return this.messages$;
  }
  public onFacesDetected(callback: (data: any) => void): void {
    this.socket.on('faces_detected', callback);
  }
  public close(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
