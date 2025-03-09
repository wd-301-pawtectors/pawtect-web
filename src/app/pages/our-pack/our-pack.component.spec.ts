import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPackComponent } from './our-pack.component';

describe('OurPackComponent', () => {
  let component: OurPackComponent;
  let fixture: ComponentFixture<OurPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurPackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
