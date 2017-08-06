import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKaryawanComponent } from './show-karyawan.component';

describe('ShowKaryawanComponent', () => {
  let component: ShowKaryawanComponent;
  let fixture: ComponentFixture<ShowKaryawanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowKaryawanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
