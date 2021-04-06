import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part21AngularDynamicFormsTutorialComponent } from './part21-angular-dynamic-forms-tutorial.component';

describe('Part21AngularDynamicFormsTutorialComponent', () => {
  let component: Part21AngularDynamicFormsTutorialComponent;
  let fixture: ComponentFixture<Part21AngularDynamicFormsTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part21AngularDynamicFormsTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part21AngularDynamicFormsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
