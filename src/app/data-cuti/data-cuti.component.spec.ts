import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCutiComponent } from './data-cuti.component';

describe('DataCutiComponent', () => {
  let component: DataCutiComponent;
  let fixture: ComponentFixture<DataCutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
