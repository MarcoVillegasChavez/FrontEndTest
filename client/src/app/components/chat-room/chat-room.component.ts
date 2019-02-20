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
  chats: any = [];
  chatsRoom: any = [];

  constructor(private chatRoomService: ChatRoomService, private chatsService: ChatsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  IdChat:string = '';
  IdUsuario = localStorage.getItem('usuario');
  
  chat: Chat = {
    IdChat: 0,
    CreadoPor: 0,
    FechaCreacion: new Date
  };

  chatRoom: ChatRoom = {
    IdChatRoom: 0,
    IdChat: 0,
    IdUsuario: 0,
    Comentario: "",
    Fecha: new Date,
    LeidoInd: 0
  };


  ngOnInit() {
    let idUsuario = localStorage.getItem('usuario');
    if (idUsuario == null){
      this.router.navigate(['/Loggin']);
    }
    //Se mandan a llamar los comentarios de la tabal chatroom por id de chat
    const params = this.activatedRoute.snapshot.params;
    this.IdChat = params.id;
    this.getChat(this.IdChat);
    this.getChatsRoom(this.IdChat);
  };
  getChat(IdChat: string) {
    this.chatsService.getChats(IdChat).subscribe(
      res => {
        this.chats = res;
      },
      err => console.log(err)
    );
  };

  getChatsRoom(IdChat: string) {
    this.chatRoomService.getChatRooms(IdChat).subscribe(
      res => {
        this.chatsRoom = res;
      },
      err => console.log(err)
    );
  }
  //Se guarda un nuevo comentario en la tabla chat room 
  saveNewComment() {
    delete this.chatRoom.IdChatRoom;
    delete this.chatRoom.Fecha;

    console.log(this.chat.IdChat[0]);
    console.log(this.chatRoom[0]);

    this.chatRoom.IdChat = Number(this.IdChat);
    this.chatRoom.IdUsuario = Number(this.IdUsuario);
    console.log(this.chatRoom);

    this.chatRoomService.saveChatRoom(this.chatRoom).subscribe(
      res => {
        this.ngOnInit();
      },
      err => console.log(err)
    );

  }
  deleteComment(id: string) {
    this.chatRoomService.deleteChatRoom(id).subscribe(
      res => {
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }


}
