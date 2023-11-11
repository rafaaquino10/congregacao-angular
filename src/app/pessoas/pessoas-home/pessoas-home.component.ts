import { Component } from '@angular/core';
import { MenuService } from '../../menu/menu.service';

@Component({
  selector: 'app-pessoas-home',
  templateUrl: './pessoas-home.component.html',
  styleUrls: ['./pessoas-home.component.scss']
})
export class PessoasHomeComponent {
  constructor(public menuService: MenuService) {}
}
