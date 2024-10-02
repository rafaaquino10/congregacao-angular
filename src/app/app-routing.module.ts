import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomePessoasComponent } from './components/pessoas/home-pessoas/home-pessoas.component';
import { CadastrarPessoaComponent } from './components/pessoas/cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './components/pessoas/editar-pessoa/editar-pessoa.component';
import { ListarPessoasComponent } from './components/pessoas/listar-pessoas/listar-pessoas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pessoas-home', component: HomePessoasComponent},
  { path: 'cadastrar-pessoa', component: CadastrarPessoaComponent },
  { path: 'editar-pessoa', component: EditarPessoaComponent },
  { path: 'listar-pessoas', component: ListarPessoasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
