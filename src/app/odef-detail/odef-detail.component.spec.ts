import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdefDetailComponent } from './odef-detail.component';

describe('OdefDetailComponent', () => {
  let component: OdefDetailComponent;
  let fixture: ComponentFixture<OdefDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdefDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdefDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
