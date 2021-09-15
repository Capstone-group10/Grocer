import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpResolveTicketsComponent } from './emp-resolve-tickets.component';

describe('EmpResolveTicketsComponent', () => {
  let component: EmpResolveTicketsComponent;
  let fixture: ComponentFixture<EmpResolveTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpResolveTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpResolveTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
