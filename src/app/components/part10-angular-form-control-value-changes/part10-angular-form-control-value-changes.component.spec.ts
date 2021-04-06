import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part10AngularFormControlValueChangesComponent } from './part10-angular-form-control-value-changes.component';

describe('Part10AngularFormControlValueChangesComponent', () => {
  let component: Part10AngularFormControlValueChangesComponent;
  let fixture: ComponentFixture<Part10AngularFormControlValueChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part10AngularFormControlValueChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part10AngularFormControlValueChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
