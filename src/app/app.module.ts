import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastrarPessoaComponent } from './pessoas/cadastrar-pessoa/cadastrar-pessoa.component';
import { ListarPessoasComponent } from './pessoas/listar-pessoas/listar-pessoas.component';
import { EditarPessoaComponent } from './pessoas/editar-pessoa/editar-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoasHomeComponent } from './pessoas/pessoas-home/pessoas-home.component';
import { TopNavComponent } from './menu/top-nav/top-nav.component';
import { SideNavComponent } from './menu/side-nav/side-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastrarPessoaComponent,
    ListarPessoasComponent,
    EditarPessoaComponent,
    PessoasHomeComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
