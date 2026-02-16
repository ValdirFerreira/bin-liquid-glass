import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLiquidGlassComponent } from './btn-liquid-glass.component';

describe('BtnLiquidGlassComponent', () => {
  let component: BtnLiquidGlassComponent;
  let fixture: ComponentFixture<BtnLiquidGlassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnLiquidGlassComponent]
    });
    fixture = TestBed.createComponent(BtnLiquidGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
