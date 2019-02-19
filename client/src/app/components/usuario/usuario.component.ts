import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuariosService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  usuario: Usuarios={
    IdUsuario:0,
    Usuario:'',
    UltimoAcceso: new Date(),
    Imagen:'',
    pass:'',
  };

  ngOnInit() {
  }

  searchCredentials(){
    
    delete this.usuario.IdUsuario;
    delete this.usuario.Imagen;
    delete this.usuario.UltimoAcceso;
    console.log(this.usuario);
    this.usuariosService.authenticateUsuario(this.usuario).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/ChatList']);
      },
      err => {
        alert('El usuario es invalido');
        return console.log(err);
      }
    );
  }

}
