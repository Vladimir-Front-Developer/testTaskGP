import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinChatService {
  private url = 'https://my-json-server.typicode.com/Vladimir-Front-Developer/testTaskGP/chats';
  private chatId: string;

  constructor(private http: HttpClient) { }

  getChatHistory(id: string): Observable<any> {
    this.chatId = id;
    return this.http.get(`${this.url}/${id}`);
  }

  sendMessage() {
    
  }

}
