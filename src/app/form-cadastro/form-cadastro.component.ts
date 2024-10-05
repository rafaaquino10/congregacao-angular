import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent {
  form = {
    nome: '',
    nomeCompleto: '',
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

  formatarTelefone(): void {
    const telefoneInput = document.getElementById('telefone') as HTMLInputElement;
    let valor = telefoneInput.value;
  
    // Remove todos os caracteres que não sejam números
    valor = valor.replace(/\D/g, '');
  
    // Aplica a máscara conforme o tamanho do valor
    if (valor.length > 10) {
      // Formato (99) 99999-9999
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (valor.length > 6) {
      // Formato (99) 9999-9999
      valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (valor.length > 2) {
      // Formato parcial (99) 9999
      valor = valor.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
      // Formato parcial (99
      valor = valor.replace(/^(\d{0,2})$/, '($1');
    }
  
    telefoneInput.value = valor;
  }
}
