import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgModaGirlComponent } from './mg-moda-girl.component';

describe('MgModaGirlComponent', () => {
  let component: MgModaGirlComponent;
  let fixture: ComponentFixture<MgModaGirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MgModaGirlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgModaGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
