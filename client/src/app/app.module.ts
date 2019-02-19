import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { UsuarioChatComponent } from './components/usuario-chat/usuario-chat.component';
import { ChatRoomFormComponent } from './components/chat-room-form/chat-room-form.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChatListComponent,
    ChatRoomComponent,
    UsuarioChatComponent,
    ChatRoomFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
