import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationComponent } from './inspiration.component';

describe('InspirationComponent', () => {
  let component: InspirationComponent;
  let fixture: ComponentFixture<InspirationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspirationComponent]
    });
    fixture = TestBed.createComponent(InspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
