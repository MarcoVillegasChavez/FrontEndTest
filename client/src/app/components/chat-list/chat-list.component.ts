import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../services/chats.service'

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(private chatService: ChatsService) { }
  chats:any = [];
  ngOnInit() {
    this.getChats
  }
  getChats(){
    this.chatService.getChats().subscribe(
      res =>{
        this.chats = res;
      },
      err => console.log(err)
    );
  }

}
