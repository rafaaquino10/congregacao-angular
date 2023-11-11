import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  constructor(private menuService: MenuService) { }

  toggleNav() {
    this.menuService.toggleSideNav();
  }
}
