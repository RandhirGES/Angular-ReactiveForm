import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part5AngularFormControlAndFormGroupComponent } from './part5-angular-form-control-and-form-group.component';

describe('Part5AngularFormControlAndFormGroupComponent', () => {
  let component: Part5AngularFormControlAndFormGroupComponent;
  let fixture: ComponentFixture<Part5AngularFormControlAndFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part5AngularFormControlAndFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part5AngularFormControlAndFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
