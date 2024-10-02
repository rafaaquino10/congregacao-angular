import { Component, Input } from '@angular/core';
import { Pessoa } from './../../../../models/pessoa.model'; // Certifique-se de importar o modelo Pessoa

@Component({
  selector: 'app-card-pessoa',
  templateUrl: './card-pessoa.component.html',
  styleUrls: ['./card-pessoa.component.scss']
})
export class CardPessoaComponent {
  @Input() pessoa!: Pessoa;  // O componente agora aceita uma pessoa como entrada
}
