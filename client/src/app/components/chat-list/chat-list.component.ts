import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../services/chats.service'
import { UsuariosChatsService } from '../../services/usuarios-chats.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(private chatService: ChatsService, private usuariosChatsService: UsuariosChatsService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  usuariosChats:any = [];
  
  ngOnInit() {
    let idUsuario = localStorage.getItem('usuario');
    if (idUsuario == null){
      this.router.navigate(['/Loggin']);
    }
    const params = this.activatedRoute.snapshot.params;
    this.getUsuariosChats(idUsuario);
  }
  
  getUsuariosChats(id:string){
    console.log(id);
      this.usuariosChatsService.getUsuariosChats(id).subscribe(
      res =>{
        console.log(res);
        this.usuariosChats = res;
      },
      err => console.log(err)
    );
  }

}
