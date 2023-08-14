import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PessoasHomeComponent } from './pessoas/pessoas-home/pessoas-home.component';
import { CadastrarPessoaComponent } from './pessoas/cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './pessoas/editar-pessoa/editar-pessoa.component';
import { ListarPessoasComponent } from './pessoas/listar-pessoas/listar-pessoas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pessoasHome', component: PessoasHomeComponent},
  { path: 'cadastrarPessoa', component: CadastrarPessoaComponent },
  { path: 'editarPessoa', component: EditarPessoaComponent },
  { path: 'listarPessoas', component: ListarPessoasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
