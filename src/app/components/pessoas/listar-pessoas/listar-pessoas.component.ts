import { Component, OnInit } from '@angular/core';
import { ListarPessoasService } from './listarPessoas.service';
import { Pessoa } from './../../../models/pessoa.model'; // Importe o modelo correto

interface SubMenus {
  pessoas: boolean;
}

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];
  nomeFiltro: string = '';
  grupoIdFiltro: number | undefined = undefined; // Corrigido para aceitar undefined

  constructor(private listarPessoasService: ListarPessoasService) {}

  ngOnInit(): void {
    // Carregar todas as pessoas inicialmente
    this.buscarPessoas();
  }

  buscarPessoas(): void {
    this.listarPessoasService.buscarPessoas(this.nomeFiltro, this.grupoIdFiltro).subscribe(
      (pessoas: Pessoa[]) => {
        this.pessoas = pessoas;
      },
      error => {
        console.error('Erro ao buscar pessoas:', error);
      }
    );
  }

  aplicarFiltros(): void {
    this.buscarPessoas();
  }

  limparFiltros(): void {
    this.nomeFiltro = '';
    this.grupoIdFiltro = undefined; // Corrigido para undefined
    this.buscarPessoas();
  }

  // Submenu toggle logic (já implementada)
  subMenus: SubMenus = {
    pessoas: false
  };

  toggleSubMenu(menu: keyof SubMenus): void {
    this.subMenus[menu] = !this.subMenus[menu];
  }
}
