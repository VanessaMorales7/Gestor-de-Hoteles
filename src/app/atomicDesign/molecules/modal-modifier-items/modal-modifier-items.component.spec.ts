import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModifierItemsComponent } from './modal-modifier-items.component';

describe('ModalModifierItemsComponent', () => {
  let component: ModalModifierItemsComponent;
  let fixture: ComponentFixture<ModalModifierItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModifierItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModifierItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
