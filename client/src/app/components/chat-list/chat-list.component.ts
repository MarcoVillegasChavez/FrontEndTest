import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../services/chats.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(private chatService: ChatsService, private router: Router, private activatedRoute: ActivatedRoute) { }
  chats:any = [];
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log('---------> params ' + params)
    this.getChats();
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
