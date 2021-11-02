import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { ThreadsComponent } from './threads.component';
import { ThreadPreviewComponent } from '../../components/thread-preview/thread-preview.component';

describe('ThreadsComponent', () => {
  let component: ThreadsComponent;
  let fixture: ComponentFixture<ThreadsComponent>;

  beforeEach(waitForAsync(() => {
    const initialState = {
      threadsData: {
        threads: []
      },
      users: {
        users: [
          {id: 1, name: 'string', avatarUrl: 'string'}
        ],
        selectedUser: 1
      }
    };
    TestBed.configureTestingModule({
      declarations: [
        ThreadsComponent,
        ThreadPreviewComponent
      ],
      imports: [],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
