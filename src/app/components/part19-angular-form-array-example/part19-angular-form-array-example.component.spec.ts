import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part19AngularFormArrayExampleComponent } from './part19-angular-form-array-example.component';

describe('Part19AngularFormArrayExampleComponent', () => {
  let component: Part19AngularFormArrayExampleComponent;
  let fixture: ComponentFixture<Part19AngularFormArrayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part19AngularFormArrayExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part19AngularFormArrayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
