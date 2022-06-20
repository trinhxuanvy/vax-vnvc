import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacxinItemComponent } from './vacxin-item.component';

describe('VacxinItemComponent', () => {
  let component: VacxinItemComponent;
  let fixture: ComponentFixture<VacxinItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacxinItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacxinItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
