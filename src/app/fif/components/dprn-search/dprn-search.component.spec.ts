import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DprnSearchComponent } from './dprn-search.component';

describe('DprnSearchComponent', () => {
  let component: DprnSearchComponent;
  let fixture: ComponentFixture<DprnSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DprnSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DprnSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
