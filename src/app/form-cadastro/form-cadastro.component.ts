import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent {
  batizado: boolean = false;
  genero: string = '';

  toggleDataBatismoField() {
    // A lógica para alternar o campo de Data de Batismo já está sendo gerenciada pelo Angular através do binding.
    // O Angular automaticamente controla a exibição com base no valor de `batizado`.
  }

  togglePrivilegioField() {
    // A lógica para alternar o campo de Privilégio já está sendo gerenciada pelo Angular através do binding.
    // O Angular automaticamente controla a exibição com base no valor de `genero`.
  }
}
