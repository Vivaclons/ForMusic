import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaryComponent } from './scary.component';

describe('ScaryComponent', () => {
  let component: ScaryComponent;
  let fixture: ComponentFixture<ScaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
