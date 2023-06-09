import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitatsComponent } from './activitats.component';

describe('ActivitatsComponent', () => {
  let component: ActivitatsComponent;
  let fixture: ComponentFixture<ActivitatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
