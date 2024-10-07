import { Component } from '@angular/core';

@Component({
  selector: 'app-toast-sucesso',
  templateUrl: './toast-sucesso.component.html',
  styleUrls: ['./toast-sucesso.component.scss']
})
export class ToastSucessoComponent {
  exibirToast: boolean = false;

  constructor() {}

  mostrarToast() {
    this.exibirToast = true;
    setTimeout(() => {
      this.exibirToast = false;
    }, 5000); // O toast desaparece após 5 segundos
  }
}
