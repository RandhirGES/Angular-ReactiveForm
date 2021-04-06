import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part17MakeCustomValidatorReusableComponent } from './part17-make-custom-validator-reusable.component';

describe('Part17MakeCustomValidatorReusableComponent', () => {
  let component: Part17MakeCustomValidatorReusableComponent;
  let fixture: ComponentFixture<Part17MakeCustomValidatorReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part17MakeCustomValidatorReusableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part17MakeCustomValidatorReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
