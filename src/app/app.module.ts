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
import { TopNavComponent } from './menu/top-nav/top-nav.component';
import { SideNavComponent } from './menu/side-nav/side-nav.component';
import { HomeTopNavComponent } from './menu/home-top-nav/home-top-nav.component';
import { CardPessoaComponent } from './components/pessoas/listar-pessoas/card-pessoa/card-pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmacaoModalComponent } from './components/pessoas/confirmacao-modal/confirmacao-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastrarPessoaComponent,
    ListarPessoasComponent,
    EditarPessoaComponent,
    HomePessoasComponent,
    TopNavComponent,
    SideNavComponent,
    HomeTopNavComponent,
    CardPessoaComponent,
    ConfirmacaoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
