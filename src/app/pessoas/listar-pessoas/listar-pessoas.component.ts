import { Component } from '@angular/core';
import { ListarPessoasService } from '../listar-pessoas/listarPessoas.service';

interface SubMenus {
  pessoas:boolean;
}

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent {
  constructor(public listarPessoasService: ListarPessoasService) {}

  subMenus = {
    pessoas: false
  };

  toggleSubMenu(menu: keyof SubMenus): void {
    this.subMenus[menu] = !this.subMenus[menu];
  }

}
