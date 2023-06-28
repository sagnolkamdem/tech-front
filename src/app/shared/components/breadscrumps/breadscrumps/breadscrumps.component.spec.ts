import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadscrumpsComponent } from './breadscrumps.component';

describe('BreadscrumpsComponent', () => {
  let component: BreadscrumpsComponent;
  let fixture: ComponentFixture<BreadscrumpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadscrumpsComponent]
    });
    fixture = TestBed.createComponent(BreadscrumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
