import { Component, AfterViewInit } from '@angular/core';
import { Renderer2, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ListarPessoasService } from '../../pessoas/listar-pessoas/listarPessoas.service';
import { Pessoa } from '../../../models/pessoa.model'

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements AfterViewInit {

  pessoas: Pessoa[] = [];

  @ViewChildren('articleElement', { read: ElementRef }) articles!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, private listarPessoasService: ListarPessoasService) { }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.listarPessoasService.buscarPessoas().subscribe({
      next: (data) => {
        this.pessoas = data;
      },
      error: (err) => {
        console.error('Erro ao buscar pessoas:', err);
        // Adicione lógica para exibir mensagens de erro ao usuário
      }
    });
  }

  ngAfterViewInit(): void {
    const articles = document.querySelectorAll('article.card');

    articles.forEach(article => {
      article.addEventListener('click', (event) => {
        // Prevenir que clique nos detalhes retraia o card
        if ((event.target as HTMLElement).closest('.card__auxiliary-content-wrapper')) {
          return;
        }

        // Alternar classes de "card--collapsed" para "card--expanded"
        if (article.classList.contains('card--collapsed')) {
          article.classList.remove('card--collapsed');
          article.classList.add('card--expanded');
        } else {
          article.classList.remove('card--expanded');
          article.classList.add('card--collapsed');
        }

        // Selecionar o elemento de detalhes e alternar a exibição
        const details = article.querySelector('.card__auxiliary-content-wrapper');
        if (details) {
          if (details.getAttribute('style')?.includes('display: none')) {
            details.setAttribute('style', 'display: block;');
          } else {
            details.setAttribute('style', 'display: none;');
          }
        }
      });
    });
  }

  mostrarTudo(): void {
    this.articles.forEach((article) => {
      this.renderer.removeClass(article.nativeElement, 'card--collapsed');
      this.renderer.addClass(article.nativeElement, 'card--expanded');
      const content = article.nativeElement.querySelector('.card__auxiliary-content-wrapper');
      if (content) {
        this.renderer.setStyle(content, 'display', 'block');
      }
    });
  }

  ocultarTudo(): void {
    this.articles.forEach((article) => {
      this.renderer.removeClass(article.nativeElement, 'card--expanded');
      this.renderer.addClass(article.nativeElement, 'card--collapsed');
      const content = article.nativeElement.querySelector('.card__auxiliary-content-wrapper');
      if (content) {
        this.renderer.setStyle(content, 'display', 'none');
      }
    });
  }
}