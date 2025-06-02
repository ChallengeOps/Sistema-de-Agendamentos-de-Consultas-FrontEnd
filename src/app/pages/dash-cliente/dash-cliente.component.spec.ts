import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashClienteComponent } from './dash-cliente.component';

describe('DashClienteComponent', () => {
  let component: DashClienteComponent;
  let fixture: ComponentFixture<DashClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
