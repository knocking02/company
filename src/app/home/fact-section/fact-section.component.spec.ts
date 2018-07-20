import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactSectionComponent } from './fact-section.component';

describe('FactSectionComponent', () => {
  let component: FactSectionComponent;
  let fixture: ComponentFixture<FactSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
