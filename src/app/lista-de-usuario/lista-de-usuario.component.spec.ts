import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeUsuarioComponent } from './lista-de-usuario.component';

describe('ListaDeUsuarioComponent', () => {
  let component: ListaDeUsuarioComponent;
  let fixture: ComponentFixture<ListaDeUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
