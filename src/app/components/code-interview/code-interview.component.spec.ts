import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInterviewComponent } from './code-interview.component';

describe('CodeInterviewComponent', () => {
  let component: CodeInterviewComponent;
  let fixture: ComponentFixture<CodeInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeInterviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
