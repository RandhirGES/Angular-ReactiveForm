import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part11LoopThroughAllFormControlsInFormGroupInReactiveFormsComponent } from './part11-loop-through-all-form-controls-in-form-group-in-reactive-forms.component';

describe('Part11LoopThroughAllFormControlsInFormGroupInReactiveFormsComponent', () => {
  let component: Part11LoopThroughAllFormControlsInFormGroupInReactiveFormsComponent;
  let fixture: ComponentFixture<Part11LoopThroughAllFormControlsInFormGroupInReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part11LoopThroughAllFormControlsInFormGroupInReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part11LoopThroughAllFormControlsInFormGroupInReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
