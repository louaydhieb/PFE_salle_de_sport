import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffclientComponent } from './affclient.component';

describe('AffclientComponent', () => {
  let component: AffclientComponent;
  let fixture: ComponentFixture<AffclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffclientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
