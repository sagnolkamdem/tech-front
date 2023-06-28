import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeInCmrComponent } from './made-in-cmr.component';

describe('MadeInCmrComponent', () => {
  let component: MadeInCmrComponent;
  let fixture: ComponentFixture<MadeInCmrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadeInCmrComponent]
    });
    fixture = TestBed.createComponent(MadeInCmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
