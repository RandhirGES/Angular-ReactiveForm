import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part12MoveValidationMessageToComponentClassComponent } from './part12-move-validation-message-to-component-class.component';

describe('Part12MoveValidationMessageToComponentClassComponent', () => {
  let component: Part12MoveValidationMessageToComponentClassComponent;
  let fixture: ComponentFixture<Part12MoveValidationMessageToComponentClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part12MoveValidationMessageToComponentClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part12MoveValidationMessageToComponentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
