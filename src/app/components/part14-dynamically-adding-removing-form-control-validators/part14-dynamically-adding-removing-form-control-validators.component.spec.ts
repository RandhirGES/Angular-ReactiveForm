import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part14DynamicallyAddingRemovingFormControlValidatorsComponent } from './part14-dynamically-adding-removing-form-control-validators.component';

describe('Part14DynamicallyAddingRemovingFormControlValidatorsComponent', () => {
  let component: Part14DynamicallyAddingRemovingFormControlValidatorsComponent;
  let fixture: ComponentFixture<Part14DynamicallyAddingRemovingFormControlValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part14DynamicallyAddingRemovingFormControlValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part14DynamicallyAddingRemovingFormControlValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
