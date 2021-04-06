import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part1CreatingAngularProjectComponent } from './part1-creating-angular-project.component';

describe('Part1CreatingAngularProjectComponent', () => {
  let component: Part1CreatingAngularProjectComponent;
  let fixture: ComponentFixture<Part1CreatingAngularProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part1CreatingAngularProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part1CreatingAngularProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
