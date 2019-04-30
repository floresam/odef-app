import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdefSearchComponent } from './odef-search.component';

describe('OdefSearchComponent', () => {
  let component: OdefSearchComponent;
  let fixture: ComponentFixture<OdefSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdefSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdefSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
