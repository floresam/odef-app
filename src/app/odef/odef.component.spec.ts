import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdefComponent } from './odef.component';

describe('OdefComponent', () => {
  let component: OdefComponent;
  let fixture: ComponentFixture<OdefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
