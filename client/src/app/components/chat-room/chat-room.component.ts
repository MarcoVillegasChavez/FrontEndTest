import { Component, OnInit } from '@angular/core';
import { ChatRoomService } from 'src/app/services/chat-room.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private chatRoomService: ChatRoomService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      console.log(params.id)
    }
  };

}
