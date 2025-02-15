// pessoa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../../../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl  = 'api/pessoas';

  constructor(private http: HttpClient) {}

  criarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.baseUrl, pessoa);
  }

  buscarPessoas(nome?: string, grupoId?: number): Observable<Pessoa[]> {
    let params = {};
    if (nome) {
      params = { ...params, nome };
    }
    if (grupoId) {
      params = { ...params, grupoId: grupoId.toString() };
    }
    return this.http.get<Pessoa[]>(`${this.baseUrl}/buscar`, { params });
  }
}
