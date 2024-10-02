import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePessoasComponent } from './home-pessoas.component';

describe('PessoasHomeComponent', () => {
  let component: HomePessoasComponent;
  let fixture: ComponentFixture<HomePessoasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePessoasComponent]
    });
    fixture = TestBed.createComponent(HomePessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
