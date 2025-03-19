import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgPhonesComponent } from './mg-phones.component';

describe('MgPhonesComponent', () => {
  let component: MgPhonesComponent;
  let fixture: ComponentFixture<MgPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MgPhonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
