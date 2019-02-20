import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service'
import { ChatsService } from '../../services/chats.service'
import { ChatRoomService } from '../../services/chat-room.service'
import { UsuariosChatsService } from '../../services/usuarios-chats.service'
import { UsuarioChats } from '../../models/usuarioChats'
import { Chat } from '../../models/chat'
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario-chat',
  templateUrl: './usuario-chat.component.html',
  styleUrls: ['./usuario-chat.component.css']
})
export class UsuarioChatComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  usuarios:any=[];
  chat:Chat={
    IdChat:0,
    CreadoPor:0,
    FechaCreacion: new Date,
  }

  IdChat:any=[];
  usuariosChats:UsuarioChats={
    IdUsuarioChat:0,
    IdChat:0,
    IdUsuario:0
  };
 
  constructor(private usuariosService: UsuariosService, private chatsService:ChatsService, private chatRoomService:ChatRoomService, private router: Router, private usuariosChatsService: UsuariosChatsService) { }

  ngOnInit() {

    this.getUsuarios();
  }
  getUsuarios(){
    this.usuariosService.getUsuarios().subscribe(
      res => {
        this.usuarios  = res;
        console.log(this.usuarios)
      },
      err => console.log(err)
    );
  }

  newChat(idUsuario:string){
    delete this.chat.IdChat;
    delete this.chat.FechaCreacion
    this.chat.CreadoPor=Number(idUsuario);
    
    this.chatsService.saveChat(this.chat).subscribe(
      res=>{
        this.chatsService.getChat().subscribe(
          res=>{
            this.IdChat=res;
            delete this.usuariosChats.IdUsuarioChat;
            this.usuariosChats["IdChat"] = this.IdChat["IdChat"];
            this.usuariosChats["IdUsuario"] = Number(idUsuario);
            console.log (this.usuariosChats);
            this.usuariosChatsService.saveUsuarioChat(this.usuariosChats).subscribe();  
            
            this.usuariosChats["IdUsuario"] = Number(localStorage.getItem('usuario'));
            this.usuariosChatsService.saveUsuarioChat(this.usuariosChats).subscribe();
                       
            this.router.navigate(['/ChatRoom/' + this.IdChat["IdChat"]]);
          },
          err=> console.log(err)
        );
      },
      err=> console.log(err)
    );
    
  }
  


}
