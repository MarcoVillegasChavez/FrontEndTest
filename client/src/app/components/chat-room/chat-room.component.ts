import { Component, OnInit } from '@angular/core';
import { ChatRoomService } from 'src/app/services/chat-room.service';
import { ChatsService } from 'src/app/services/chats.service';
import { ChatRoom } from '../../models/chatRoom'
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  chatsRoom: any = [];
  constructor(private chatRoomService: ChatRoomService, private chatsService: ChatsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  chat: Chat = {};

  chatRoom: ChatRoom = {
    IdChatRoom: 0,
    IdChat: 0,
    IdUsuario: 0,
    Comentario: "",
    Fecha: new Date,
    LeidoInd: 0
  };

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.getChat(params.id);
    this.getChatsRoom();
  };
  getChat(IdChat: string) {
    this.chatsService.getChat(IdChat).subscribe(
      res => {
        this.chat = res;
        this.chatRoom.IdUsuario = this.chat.CreadoPor;
        this.chatRoom.IdChat = this.chat.IdChat;
        console.log(res)
      },
      err => console.log(err)
    );
  };

  getChatsRoom() {
    this.chatRoomService.getChatRooms().subscribe(
      res => {
        this.chatsRoom = res;
      },
      err => console.log(err)
    );
  }
  saveNewComment() {
    delete this.chatRoom.IdChatRoom;
    delete this.chatRoom.Fecha;
    this.chatRoomService.saveChatRoom(this.chatRoom).subscribe(
      res => {
        console.log(res)
        this.ngOnInit();
      },
      err => console.log(err)
    );
    console.log(this.chatRoom);
  }


}
