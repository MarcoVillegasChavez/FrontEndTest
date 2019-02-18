import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioChats } from '../models/usuarioChats'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosChatsService {
  
  API_URI = 'http://localhost:3000/api/'
  constructor(private http:HttpClient) { }
  getUsuariosChats(){
    return this.http.get(this.API_URI + 'UsuarioChats');
  }
  getUsuarioChat(id:string){
    return this.http.get(this.API_URI + 'UsuarioChats/' + id);
  }
  saveUsuarioChat(usuarioChat: UsuarioChats){
    return this.http.post(this.API_URI + 'UsuarioChats', usuarioChat);
  }
  deleteUsuarioChat(id:string){
    console.log(id);
    return this.http.delete(this.API_URI + 'UsuarioChats/ '+ id);
  }
  updateUsuarioChat(id: string|number, usuarioChat:UsuarioChats): Observable<UsuarioChats>{
    return this.http.put(this.API_URI + 'UsuarioChats/' + id, usuarioChat);
  }
}
