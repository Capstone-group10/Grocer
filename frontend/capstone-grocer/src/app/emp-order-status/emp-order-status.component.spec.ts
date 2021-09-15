import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOrderStatusComponent } from './emp-order-status.component';

describe('EmpOrderStatusComponent', () => {
  let component: EmpOrderStatusComponent;
  let fixture: ComponentFixture<EmpOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpOrderStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
