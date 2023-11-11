import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarPessoasService {
  private isSideNavExpandedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isSideNavExpanded$: Observable<boolean> = this.isSideNavExpandedSubject.asObservable();

  toggleSideNav() {
    this.isSideNavExpandedSubject.next(!this.isSideNavExpandedSubject.value);
  }
}
