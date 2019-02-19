import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatListComponent } from './components/chat-list/chat-list.component'
import { ChatRoomComponent } from './components/chat-room/chat-room.component'
import { UsuarioChatComponent } from './components/usuario-chat/usuario-chat.component'
import { UsuarioComponent } from './components/usuario/usuario.component'


const routes: Routes = [
  {
    path:'',
    redirectTo:'/ChatList',
    pathMatch: 'full'
  },
  {
    path:'ChatList',
    component: ChatListComponent
  },
  {
    path:'ChatList/:id',
    component: ChatListComponent
  },
  {
    path:'ChatRoom/:id',
    component: ChatRoomComponent
  },
  {
    path:'UsuarioChat',
    component: UsuarioChatComponent
  },
  {
    path:'Loggin',
    component: UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
