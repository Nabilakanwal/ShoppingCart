import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnavshopComponent } from './leftnavshop.component';

describe('LeftnavshopComponent', () => {
  let component: LeftnavshopComponent;
  let fixture: ComponentFixture<LeftnavshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftnavshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftnavshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
