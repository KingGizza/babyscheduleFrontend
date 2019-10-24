import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaydescriptionComponent } from './daydescription.component';

describe('DaydescriptionComponent', () => {
  let component: DaydescriptionComponent;
  let fixture: ComponentFixture<DaydescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaydescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaydescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
