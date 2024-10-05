import { Component } from '@angular/core';
import { MenuService } from '../menu/menu.service';

interface SubMenus {
  pessoas: boolean;
  reunioes: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(public menuService: MenuService) { }

  subMenus = {
    pessoas: false,
    reunioes: false
  };

  toggleSubMenu(menu: keyof SubMenus): void {
    this.subMenus[menu] = !this.subMenus[menu];
  }
}
