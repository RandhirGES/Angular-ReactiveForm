import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part6AngularNestedFormGroupComponent } from './part6-angular-nested-form-group.component';

describe('Part6AngularNestedFormGroupComponent', () => {
  let component: Part6AngularNestedFormGroupComponent;
  let fixture: ComponentFixture<Part6AngularNestedFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part6AngularNestedFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part6AngularNestedFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
