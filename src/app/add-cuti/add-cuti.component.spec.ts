import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCutiComponent } from './add-cuti.component';

describe('AddCutiComponent', () => {
  let component: AddCutiComponent;
  let fixture: ComponentFixture<AddCutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
