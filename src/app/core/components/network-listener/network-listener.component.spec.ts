import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkListenerComponent } from './network-listener.component';

describe('NetworkListenerComponent', () => {
  let component: NetworkListenerComponent;
  let fixture: ComponentFixture<NetworkListenerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkListenerComponent]
    });
    fixture = TestBed.createComponent(NetworkListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
