import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component'
import { GameFormComponent } from './components/game-form/game-form.component'


import { ChatListComponent } from './components/chat-list/chat-list.component'
import { ChatRoomComponent } from './components/chat-room/chat-room.component'
import { UsuarioChatComponent } from './components/usuario-chat/usuario-chat.component'


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
    path:'ChatRoom/:id',
    component: ChatRoomComponent
  },
  {
    path:'ChatRoom/add',
    component: UsuarioChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
