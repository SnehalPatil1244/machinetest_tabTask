import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforswitchComponent } from './ngforswitch.component';

describe('NgforswitchComponent', () => {
  let component: NgforswitchComponent;
  let fixture: ComponentFixture<NgforswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
