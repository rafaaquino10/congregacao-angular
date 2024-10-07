import { Component, ViewChild } from '@angular/core';
import { ToastSucessoComponent } from '../../../toast-sucesso/toast-sucesso.component';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.scss']
})
export class CadastrarPessoaComponent {
  @ViewChild('toast') toast!: ToastSucessoComponent;

  salvarFormulario() {
    // Ação de salvar pode ser feita aqui, por exemplo, enviar para uma API.
    console.log('Dados do formulário salvos com sucesso.');
    this.toast.mostrarToast(); // Exibe o toast de sucesso
  }

  limparFormulario() {
    // Lógica de limpar o formulário se necessário
  } 
}
