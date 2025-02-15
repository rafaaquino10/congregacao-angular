import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './../../../models/pessoa.model'; // Importe o modelo correto

@Injectable({
  providedIn: 'root'
})
export class ListarPessoasService {
  private baseUrl = '/api/pessoas';

  constructor(private http: HttpClient) {}

  buscarPessoas(nome?: string, grupoId?: number): Observable<Pessoa[]> {
    let params = new HttpParams();
    if (nome) {
      params = params.set('nome', nome);
    }
    if (grupoId) {
      params = params.set('grupoId', grupoId.toString());
    }
    return this.http.get<Pessoa[]>(`${this.baseUrl}/buscar`, { params });
  }
}
