import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManicComponent } from './manic.component';

describe('ManicComponent', () => {
  let component: ManicComponent;
  let fixture: ComponentFixture<ManicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
