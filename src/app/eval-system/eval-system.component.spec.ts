import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalSystemComponent } from './eval-system.component';

describe('EvalSystemComponent', () => {
  let component: EvalSystemComponent;
  let fixture: ComponentFixture<EvalSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
