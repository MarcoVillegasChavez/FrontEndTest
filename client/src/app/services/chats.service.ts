import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../models/chat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  API_URI = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }
  getChats() {
    return this.http.get(this.API_URI + 'Chat');
  }
  getChat(IdChat: string) {
    return this.http.get(this.API_URI + 'Chat/' + IdChat);
  }
  saveChat(chat: Chat) {
    return this.http.post(this.API_URI + 'Chat', chat);
  }
  deleteChat(IdChat: string) {
    return this.http.delete(this.API_URI + 'Chat/' + IdChat);
  }
  updateChat(IdChat: string | number, chat: Chat): Observable<Chat> { 
    return this.http.put(this.API_URI + 'Chat/' + IdChat, chat);
  }
}
