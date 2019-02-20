import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosChatsService } from '../../services/usuarios-chats.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  @HostBinding('class') classes = 'row'
  usuarios : any = [];
  
  constructor(private usuariosChatsService: UsuariosChatsService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    let idUsuario = localStorage.getItem('usuario');
    if (idUsuario == null){
      this.router.navigate(['/Loggin']);
    }
    this.getUsuariosChats(idUsuario);
  }
  
  getUsuariosChats(id:string){    
      this.usuariosChatsService.getUsuariosChats(id).subscribe(
      res =>{        
        this.usuarios = res;
        console.log(this.usuarios);
      },
      err => console.log(err)
    );
  }

}
