import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { provideMockStore } from '@ngrx/store/testing';

import { MessagesComponent } from './messages.component';
import { MessageSendTimePipe } from '../../pipes/message-send-time.pipe';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
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
        MessagesComponent,
        MessageSendTimePipe
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        DatePipe,
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
