import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitCardComponent } from './twit-card.component';

describe('TwitCardComponent', () => {
  let component: TwitCardComponent;
  let fixture: ComponentFixture<TwitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
