import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2InstallBootstrapForAngularComponent } from './part2-install-bootstrap-for-angular.component';

describe('Part2InstallBootstrapForAngularComponent', () => {
  let component: Part2InstallBootstrapForAngularComponent;
  let fixture: ComponentFixture<Part2InstallBootstrapForAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part2InstallBootstrapForAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part2InstallBootstrapForAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
