import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part9AngularReactiveFormsValidationComponent } from './part9-angular-reactive-forms-validation.component';

describe('Part9AngularReactiveFormsValidationComponent', () => {
  let component: Part9AngularReactiveFormsValidationComponent;
  let fixture: ComponentFixture<Part9AngularReactiveFormsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part9AngularReactiveFormsValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part9AngularReactiveFormsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
