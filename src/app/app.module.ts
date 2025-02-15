import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarPessoaComponent } from './components/pessoas/cadastrar-pessoa/cadastrar-pessoa.component';
import { ListarPessoasComponent } from './components/pessoas/listar-pessoas/listar-pessoas.component';
import { EditarPessoaComponent } from './components/pessoas/editar-pessoa/editar-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePessoasComponent } from './components/pessoas/home-pessoas/home-pessoas.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ToastSucessoComponent } from './toast-sucesso/toast-sucesso.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastrarPessoaComponent,
    ListarPessoasComponent,
    EditarPessoaComponent,
    HomePessoasComponent,
    NavigationComponent,
    FormCadastroComponent,
    ToastSucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule ,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
