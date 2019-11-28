import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcinSearchComponent } from './ccin-search.component';

describe('CcinSearchComponent', () => {
  let component: CcinSearchComponent;
  let fixture: ComponentFixture<CcinSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcinSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcinSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
