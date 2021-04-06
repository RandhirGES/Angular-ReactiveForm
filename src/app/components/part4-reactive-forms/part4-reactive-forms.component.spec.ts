import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part4ReactiveFormsComponent } from './part4-reactive-forms.component';

describe('Part4ReactiveFormsComponent', () => {
  let component: Part4ReactiveFormsComponent;
  let fixture: ComponentFixture<Part4ReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part4ReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part4ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
