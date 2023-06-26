import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceToBeComponent } from './place-to-be.component';

describe('PlaceToBeComponent', () => {
  let component: PlaceToBeComponent;
  let fixture: ComponentFixture<PlaceToBeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceToBeComponent]
    });
    fixture = TestBed.createComponent(PlaceToBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
