import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawtectorComponent } from './pawtector.component';

describe('PawtectorComponent', () => {
  let component: PawtectorComponent;
  let fixture: ComponentFixture<PawtectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawtectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PawtectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
