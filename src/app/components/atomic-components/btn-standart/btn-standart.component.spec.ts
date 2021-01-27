import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnStandartComponent } from './btn-standart.component';

describe('BtnStandartComponent', () => {
  let component: BtnStandartComponent;
  let fixture: ComponentFixture<BtnStandartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnStandartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnStandartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
