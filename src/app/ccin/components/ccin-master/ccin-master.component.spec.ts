import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcinMasterComponent } from './ccin-master.component';

describe('CcinMasterComponent', () => {
  let component: CcinMasterComponent;
  let fixture: ComponentFixture<CcinMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcinMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcinMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
