import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastSucessoComponent } from './toast-sucesso.component';

describe('ToastSucessoComponent', () => {
  let component: ToastSucessoComponent;
  let fixture: ComponentFixture<ToastSucessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastSucessoComponent]
    });
    fixture = TestBed.createComponent(ToastSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
