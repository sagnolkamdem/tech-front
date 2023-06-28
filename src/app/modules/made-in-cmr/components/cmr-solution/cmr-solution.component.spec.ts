import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrSolutionComponent } from './cmr-solution.component';

describe('CmrSolutionComponent', () => {
  let component: CmrSolutionComponent;
  let fixture: ComponentFixture<CmrSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmrSolutionComponent]
    });
    fixture = TestBed.createComponent(CmrSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
