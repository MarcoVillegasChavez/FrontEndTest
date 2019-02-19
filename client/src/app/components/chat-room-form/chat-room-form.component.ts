import { Component, OnInit } from '@angular/core';
import { ChatRoom } from '../../models/chatRoom'
import { ChatRoomComponent } from '../chat-room/chat-room.component'
import { ChatRoomService } from 'src/app/services/chat-room.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-room-form',
  templateUrl: './chat-room-form.component.html',
  styleUrls: ['./chat-room-form.component.css']
})
export class ChatRoomFormComponent implements OnInit {
  constructor(private chatRoomService: ChatRoomService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  chatRoom : ChatRoom = {
    IdChatRoom :0,
    IdChat :1,
    IdUsuario:2,
    Comentario : "",
    Fecha :new Date,
    LeidoInd :0
};
   ngOnInit() {
  }
  saveNewComment(){
    delete this.chatRoom.IdChatRoom;
    delete this.chatRoom.Fecha;
    this.chatRoomService.saveChatRoom(this.chatRoom).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );


    console.log(this.chatRoom);
  }

}
