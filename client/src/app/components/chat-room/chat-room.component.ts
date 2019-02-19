import { Component, OnInit } from '@angular/core';
import { ChatRoomService } from 'src/app/services/chat-room.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ChatRoomFormComponent } from '../chat-room-form/chat-room-form.component';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  chatsRoom:any=[];
  constructor(private chatRoomService: ChatRoomService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      console.log(params.id)
    }
    this.getChatsRoom();
  };
  getChatsRoom(){
    this.chatRoomService.getChatRooms().subscribe(
      res=>{
        this.chatsRoom = res;
      },
      err=> console.log(err)
    );
  }

}
