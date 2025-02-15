import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastSucessoComponent } from '../toast-sucesso/toast-sucesso.component';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent {
  @ViewChild('toast') toast!: ToastSucessoComponent;
  @ViewChild('formCadastro') formCadastro!: NgForm;

  form = {
    nome: '',
    genero: '',
    dataNascimento: '',
    batizado: false,
    dataBatismo: '',
    privilegio: '',
    pioneiro: '',
    ungido: false,
    grupo: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: '',
    uf: '',
    telefone: '',
    email: '',
    emergNome: '',
    emergParentesco: '',
    emergTelefone: '',
    emergEmail: ''
  };

  constructor() { }

  onBatizadoChange() {
    if (!this.form.batizado) {
      this.form.dataBatismo = '';
    }
  }

  onGeneroChange() {
    if (this.form.genero !== 'masculino') {
      this.form.privilegio = '';
    }
  }

  formatarTelefone(id: string): void {
    const telefoneInput = document.getElementById(id) as HTMLInputElement;
    let valor = telefoneInput.value;
  
    valor = valor.replace(/\D/g, '');

    if (valor.length > 10) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (valor.length > 6) {
      valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
      valor = valor.replace(/^(\d{0,2})$/, '($1');
    }

    telefoneInput.value = valor;
  }

  salvarFormulario() {
    if (this.formCadastro.valid) {
      this.toast.mostrarToast();
      // Outras ações de salvamento...
    } else {
      // Exibir mensagens de erro ou destacar campos inválidos
    }
  }

  limparFormulario(form: NgForm) {
    form.resetForm();
  }
}
