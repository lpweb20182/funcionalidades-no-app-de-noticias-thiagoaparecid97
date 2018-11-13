import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-de-usuario',
  templateUrl: './lista-de-usuario.component.html',
  styleUrls: ['./lista-de-usuario.component.css']
})
export class ListaDeUsuarioComponent implements OnInit {

  usuarios$ = null;
  excluir_ok = false;
  excluir_erro = false;

  constructor(private service: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.usuarios$ = this.service.todas();
  }
  excluir(usuario) {
    if (confirm(`Tem certeza que deseja excluir esse Usuario: ${usuario.id} ?`)) {
      this.service.excluir(usuario.id).subscribe(
        usuario => {
          this.excluir_ok = true;
          this.usuarios$ = this.service.todas();
        },
        erro => {
          console.log(erro);
          this.excluir_erro = true;
        }
      )
    }
  }
}
