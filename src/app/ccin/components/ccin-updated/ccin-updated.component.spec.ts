import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcinUpdatedComponent } from './ccin-updated.component';

describe('CcinUpdatedComponent', () => {
  let component: CcinUpdatedComponent;
  let fixture: ComponentFixture<CcinUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcinUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcinUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
