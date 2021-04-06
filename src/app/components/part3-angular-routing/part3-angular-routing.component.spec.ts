import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part3AngularRoutingComponent } from './part3-angular-routing.component';

describe('Part3AngularRoutingComponent', () => {
  let component: Part3AngularRoutingComponent;
  let fixture: ComponentFixture<Part3AngularRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part3AngularRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part3AngularRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
