import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../menu/menu.service';

@Component({
  selector: 'app-home-pessoas',
  templateUrl: './home-pessoas.component.html',
  styleUrls: ['./home-pessoas.component.scss']
})
export class HomePessoasComponent implements OnInit {

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.expandSideNav(); // Expandir o side-nav ao carregar a página
  }
}
