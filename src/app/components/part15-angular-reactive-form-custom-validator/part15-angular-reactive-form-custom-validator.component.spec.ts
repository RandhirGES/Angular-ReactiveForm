import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part15AngularReactiveFormCustomValidatorComponent } from './part15-angular-reactive-form-custom-validator.component';

describe('Part15AngularReactiveFormCustomValidatorComponent', () => {
  let component: Part15AngularReactiveFormCustomValidatorComponent;
  let fixture: ComponentFixture<Part15AngularReactiveFormCustomValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part15AngularReactiveFormCustomValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part15AngularReactiveFormCustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
