import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part16AngularReactiveFormCustomValidatorWithParameterComponent } from './part16-angular-reactive-form-custom-validator-with-parameter.component';

describe('Part16AngularReactiveFormCustomValidatorWithParameterComponent', () => {
  let component: Part16AngularReactiveFormCustomValidatorWithParameterComponent;
  let fixture: ComponentFixture<Part16AngularReactiveFormCustomValidatorWithParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part16AngularReactiveFormCustomValidatorWithParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part16AngularReactiveFormCustomValidatorWithParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
