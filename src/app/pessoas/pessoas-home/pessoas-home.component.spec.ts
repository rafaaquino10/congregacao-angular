import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasHomeComponent } from './pessoas-home.component';

describe('PessoasHomeComponent', () => {
  let component: PessoasHomeComponent;
  let fixture: ComponentFixture<PessoasHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasHomeComponent]
    });
    fixture = TestBed.createComponent(PessoasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
