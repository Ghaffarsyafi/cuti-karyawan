import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCutiComponent } from './show-cuti.component';

describe('ShowCutiComponent', () => {
  let component: ShowCutiComponent;
  let fixture: ComponentFixture<ShowCutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
