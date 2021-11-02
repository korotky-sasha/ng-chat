import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThreadPreviewComponent } from './thread-preview.component';

describe('ThreadPreviewComponent', () => {
  let component: ThreadPreviewComponent;
  let fixture: ComponentFixture<ThreadPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
