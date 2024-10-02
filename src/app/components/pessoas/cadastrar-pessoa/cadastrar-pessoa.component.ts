import { Component } from '@angular/core';
import { PessoaService } from '../service/PessoaService';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.scss']
})
export class CadastrarPessoaComponent {
  confirmationMessage: any;
  isConfirmationModalVisible: boolean = false;

  constructor(private pessoaService: PessoaService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.pessoaService.cadastrarPessoa(form.value).subscribe(
        response => {
          console.log('Cadastro realizado com sucesso!', response);
          this.confirmationMessage = 'Deseja confirmar o registro de pessoa?'
          this.isConfirmationModalVisible = true;
        },
        error => {
          console.error('Erro ao cadastrar pessoa:', error);
        }
      );
    } else {
      console.log('Formulário inválido. Não é possível enviar para o backend.');
    }
  }

  openConfirmationModal(form: NgForm): void {
    if (form.valid) {
      this.confirmationMessage = 'Deseja confirmar o registro da pessoa?';
      this.isConfirmationModalVisible = true;
    } else {
      console.log('Formulário inválido. Não é possível abrir o modal.');
    }
  }

  onConfirmationModalResult(confirmed: boolean): void {
    if (confirmed) {
      console.log('Confirmação realizada!');
    } else {
      console.log('Operação cancelada.');
    }
    this.isConfirmationModalVisible = false;
  }
}
