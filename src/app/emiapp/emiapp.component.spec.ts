import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiappComponent } from './emiapp.component';

describe('EmiappComponent', () => {
  let component: EmiappComponent;
  let fixture: ComponentFixture<EmiappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
