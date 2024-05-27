import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouayComponent } from './louay.component';

describe('LouayComponent', () => {
  let component: LouayComponent;
  let fixture: ComponentFixture<LouayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LouayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LouayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
