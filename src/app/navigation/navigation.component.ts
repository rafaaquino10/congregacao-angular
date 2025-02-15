import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuAberto: string = '';
  subItemAtivo: string = '';

  constructor(private router: Router) {
    // Ouve mudanças de rota para atualizar o estado do menu e sub-item ativo
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.atualizarEstadoMenu(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit(): void {
    // Atualiza o estado do menu com base na rota atual ao iniciar
    this.atualizarEstadoMenu(this.router.url);
  }

  toggleMenu(menu: string): void {
    // Alterna o menu principal
    if (this.menuAberto === menu) {
      this.menuAberto = '';
    } else {
      this.menuAberto = menu;
    }
  }

  atualizarEstadoMenu(url: string): void {
    // Verifica qual menu principal deve estar aberto
    if (url.includes('home-pessoas') || url.includes('cadastrar-pessoa') || url.includes('listar-pessoas') || url.includes('visualizar-grupos')) {
      this.menuAberto = 'pessoas';
    } else if (url.includes('reunioes')) {
      this.menuAberto = 'reunioes';
    } else if (url.includes('relatorios')) {
      this.menuAberto = 'relatorios';
    } else if (url.includes('territorios')) {
      this.menuAberto = 'territorios';
    } else {
      this.menuAberto = ''; // Fechar todos se não houver uma rota correspondente
    }

    // Definir o sub-item ativo
    if (url.includes('cadastrar-pessoa')) {
      this.subItemAtivo = 'cadastrar-pessoa';
    } else if (url.includes('listar-pessoas')) {
      this.subItemAtivo = 'listar-pessoas';
    } else if (url.includes('visualizar-grupos')) {
      this.subItemAtivo = 'visualizar-grupos';
    } else if (url.includes('programacao')) {
      this.subItemAtivo = 'programacao';
    } else if (url.includes('designacoes')) {
      this.subItemAtivo = 'designacoes';
    } else if (url.includes('assistencia')) {
      this.subItemAtivo = 'assistencia';
    } else if (url.includes('quadro-anuncios')) {
      this.subItemAtivo = 'quadro-anuncios';
    } else {
      this.subItemAtivo = '';
    }
  }

  isMenuAtivo(menu: string): boolean {
    return this.menuAberto === menu;
  }
}
