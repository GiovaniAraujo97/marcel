import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgJoalheriaComponent } from './mg-joalheria.component';

describe('MgJoalheriaComponent', () => {
  let component: MgJoalheriaComponent;
  let fixture: ComponentFixture<MgJoalheriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MgJoalheriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgJoalheriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
