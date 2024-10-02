import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isSideNavExpandedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isSideNavExpanded$: Observable<boolean> = this.isSideNavExpandedSubject.asObservable();

  constructor() {
    this.expandSideNav(); // Garantir que o side-nav esteja expandido por padrão
  }

  toggleSideNav(): void {
    this.isSideNavExpandedSubject.next(!this.isSideNavExpandedSubject.value);
  }

  expandSideNav(): void {
    this.isSideNavExpandedSubject.next(true);
  }

  collapseSideNav(): void {
    this.isSideNavExpandedSubject.next(false);
  }
}
