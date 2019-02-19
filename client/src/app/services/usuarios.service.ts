import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URI = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  getUsuarios(){
    return this.http.get(this.API_URI + 'Usuario');
  }
  getUsuario(id:string){
    return this.http.get(this.API_URI + 'Usuario/' + id);
  }
  saveUsuario(usuario: Usuarios){
    return this.http.post(this.API_URI + 'Usuario', usuario);
  }
  deleteUsuario(id:string){
    console.log(id);
    return this.http.delete(this.API_URI + 'Usuario/ '+ id);
  }
  updateUsuario(id: string|number, usuario:Usuarios): Observable<Usuarios>{
    return this.http.put(this.API_URI + 'Usuario/' + id, usuario);
  }
  authenticateUsuario(usuario: Usuarios){
    return this.http.post(this.API_URI + 'Usuario/AutenticarUsuario', usuario);
  }
}
