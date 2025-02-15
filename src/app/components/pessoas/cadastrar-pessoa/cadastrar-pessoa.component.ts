import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastSucessoComponent } from '../../../toast-sucesso/toast-sucesso.component';
import { PessoaService } from '../../pessoas/service/PessoaService'
import { Pessoa } from '../../../models/pessoa.model'

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.scss']
})
export class CadastrarPessoaComponent {
  @ViewChild('toast') toast!: ToastSucessoComponent;
  @ViewChild('formCadastro') formCadastro!: NgForm;


  form: Pessoa = {
    id: 0,
    nome: '',
    genero: '',
    dataNascimento: '',
    telefone: '',
    email: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    batizado: false,
    dataBatismo: '',
    grupo: '',
    ungido: false,
    pioneiro: '',
    privilegio: '',
    emergNome: '',
    emergParentesco: '',
    emergTelefone: '',
    emergEmail: ''
  };

  constructor(private pessoaService: PessoaService) { }

  salvarFormulario() {
    if (this.formCadastro.valid) {
      this.pessoaService.criarPessoa(this.form).subscribe({
        next: (novaPessoa) => {
          this.toast.mostrarToast();
          this.limparFormulario(this.formCadastro);
        },
        error: (err) => {
          console.error('Erro ao salvar pessoa:', err);
          // Adicione lógica para exibir mensagens de erro ao usuário
        }
      });
    } else {
      // Exibir mensagens de erro ou destacar campos inválidos
      console.log('Formulário inválido');
    }
  }

  limparFormulario(form: NgForm) {
    form.resetForm();
  }

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
}
