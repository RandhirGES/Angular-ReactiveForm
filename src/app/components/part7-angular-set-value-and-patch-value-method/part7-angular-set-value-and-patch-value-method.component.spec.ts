import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part7AngularSetValueAndPatchValueMethodComponent } from './part7-angular-set-value-and-patch-value-method.component';

describe('Part7AngularSetValueAndPatchValueMethodComponent', () => {
  let component: Part7AngularSetValueAndPatchValueMethodComponent;
  let fixture: ComponentFixture<Part7AngularSetValueAndPatchValueMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part7AngularSetValueAndPatchValueMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part7AngularSetValueAndPatchValueMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
