import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part8AngularFormBuilderExampleComponent } from './part8-angular-form-builder-example.component';

describe('Part8AngularFormBuilderExampleComponent', () => {
  let component: Part8AngularFormBuilderExampleComponent;
  let fixture: ComponentFixture<Part8AngularFormBuilderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part8AngularFormBuilderExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part8AngularFormBuilderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
