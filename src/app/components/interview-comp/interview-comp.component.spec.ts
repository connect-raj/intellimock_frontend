import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCompComponent } from './interview-comp.component';

describe('InterviewCompComponent', () => {
  let component: InterviewCompComponent;
  let fixture: ComponentFixture<InterviewCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
