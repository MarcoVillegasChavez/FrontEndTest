import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatRoom } from '../models/chatRoom';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {

  API_URI = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  getChatRooms(id:string|number){
    return this.http.get(this.API_URI + 'ChatRoom/' + id);
  }
  getChatRoom(id:string){
    return this.http.get(this.API_URI + 'ChatRoom/' + id);
  }
  saveChatRoom(chatRoom: ChatRoom){
    return this.http.post(this.API_URI + 'ChatRoom', chatRoom);
  }
  deleteChatRoom(id:string){
    console.log(id);
    return this.http.delete(this.API_URI + 'ChatRoom/ '+ id);
  }
  updateChatRoom(id: string|number, chatRoom:ChatRoom): Observable<ChatRoom>{
    return this.http.put(this.API_URI + 'ChatRoom/' + id, chatRoom);
  }
}
