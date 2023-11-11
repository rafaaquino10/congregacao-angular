import { Component, Input } from '@angular/core';
import { MenuService } from '../menu.service';

interface SubMenus {
  pessoas: boolean;
  reunioes: boolean;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  constructor(public menuService: MenuService) { }

  subMenus = {
    pessoas: false,
    reunioes: false
  };

  toggleSubMenu(menu: keyof SubMenus): void {
    this.subMenus[menu] = !this.subMenus[menu];
  }

}
