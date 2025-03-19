import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgShoppingComponent } from './mg-shopping.component';

describe('MgShoppingComponent', () => {
  let component: MgShoppingComponent;
  let fixture: ComponentFixture<MgShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MgShoppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
