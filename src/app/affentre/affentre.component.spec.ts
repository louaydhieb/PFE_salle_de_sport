import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffentreComponent } from './affentre.component';

describe('AffentreComponent', () => {
  let component: AffentreComponent;
  let fixture: ComponentFixture<AffentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffentreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
