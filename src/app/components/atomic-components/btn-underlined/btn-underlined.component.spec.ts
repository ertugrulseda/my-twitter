import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnUnderlinedComponent } from './btn-underlined.component';

describe('BtnUnderlinedComponent', () => {
  let component: BtnUnderlinedComponent;
  let fixture: ComponentFixture<BtnUnderlinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnUnderlinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnUnderlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
