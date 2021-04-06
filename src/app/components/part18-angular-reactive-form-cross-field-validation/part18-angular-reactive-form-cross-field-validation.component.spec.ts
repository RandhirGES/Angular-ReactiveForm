import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part18AngularReactiveFormCrossFieldValidationComponent } from './part18-angular-reactive-form-cross-field-validation.component';

describe('Part18AngularReactiveFormCrossFieldValidationComponent', () => {
  let component: Part18AngularReactiveFormCrossFieldValidationComponent;
  let fixture: ComponentFixture<Part18AngularReactiveFormCrossFieldValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part18AngularReactiveFormCrossFieldValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part18AngularReactiveFormCrossFieldValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
