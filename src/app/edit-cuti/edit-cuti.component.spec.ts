import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCutiComponent } from './edit-cuti.component';

describe('EditCutiComponent', () => {
  let component: EditCutiComponent;
  let fixture: ComponentFixture<EditCutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
