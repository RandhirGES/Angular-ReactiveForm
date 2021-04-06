import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part13MoveValidationLogicToComponentClassComponent } from './part13-move-validation-logic-to-component-class.component';

describe('Part13MoveValidationLogicToComponentClassComponent', () => {
  let component: Part13MoveValidationLogicToComponentClassComponent;
  let fixture: ComponentFixture<Part13MoveValidationLogicToComponentClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part13MoveValidationLogicToComponentClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part13MoveValidationLogicToComponentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
