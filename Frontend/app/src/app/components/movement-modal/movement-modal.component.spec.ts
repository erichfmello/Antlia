import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementModalComponent } from './movement-modal.component';

describe('MovementModalComponent', () => {
  let component: MovementModalComponent;
  let fixture: ComponentFixture<MovementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
