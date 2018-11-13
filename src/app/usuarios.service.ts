import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacaoService } from './api.service';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URL = 'http://localhost:8000/api/usuarios/';

  constructor(private http: HttpClient, private auth: AutenticacaoService) { }


  public todas() {
    const options = this.getHeaders();
    return this.http.get(this.API_URL, options)
      .pipe(
        tap(r => console.log(r))
      );
  }
  private getHeaders() {
    const credenciais = this.auth.getCredenciais();
    if (credenciais) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${credenciais.username}:${credenciais.password}`)
        })
      };
    } else {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    }
  }
  public excluir(id: number){
    const options = this.getHeaders();
    return this.http.delete(this.API_URL + id + '/', options);
  }
}

