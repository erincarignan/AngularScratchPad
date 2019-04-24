import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedProgressComponent } from './extended-progress.component';

describe('ExtendedProgressComponent', () => {
  let component: ExtendedProgressComponent;
  let fixture: ComponentFixture<ExtendedProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
