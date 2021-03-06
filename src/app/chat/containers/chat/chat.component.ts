import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { setThreads } from '../../../shared/store/threads/threads.actions';
import { selectUser, setUsers } from '../../../shared/store/users/users.actions';
import { getTotalUnreadMessagesNumber } from '../../../shared/store/threads/threads.selector';

import { AuthService } from '../../../auth/services/auth.service';

import { ChatState } from '../../../shared/models/chat-state';
import { Thread } from '../../../shared/models/threads-data';
import { animations } from './chat.animations';

const mockThreads: Thread[] = [
  {
    id: 1,
    name: 'First thread',
    messages: [
      {
        id: 1,
        author: 1,
        isRead: false,
        sendAt: new Date(2020, 1, 4, 13, 30),
        text: ['First message of first thread']
      },
      {
        id: 2,
        author: 1,
        isRead: false,
        sendAt: new Date(2020, 1, 4, 13, 40),
        text: ['Second message of first thread']
      },
      {
        id: 3,
        author: 1,
        isRead: false,
        sendAt: new Date(2020, 1, 5, 11, 25),
        text: ['Third message of first thread']
      }
    ],
    selectedMessageId: 1
  },
  {
    id: 2,
    name: 'Second thread',
    messages: [
      {
        id: 1,
        author: 1,
        isRead: false,
        sendAt: new Date(2020, 1, 4, 13, 35),
        text: ['First message of second thread']
      },
      {
        id: 2,
        author: 1,
        isRead: false,
        sendAt: new Date(2020, 1, 4, 13, 45),
        text: ['Second message of second thread']
      }
    ],
    selectedMessageId: 1
  },
  {
    id: 3,
    name: 'Echo bot',
    messages: [
      {
        id: 1,
        author: 2,
        isRead: false,
        sendAt: new Date(2020, 1, 4, 13, 35),
        text: ['I will echo whatever you send me']
      }
    ],
    selectedMessageId: 1
  },
  {
    id: 4,
    name: 'Reverse bot',
    messages: [
      {
        id: 1,
        author: 3,
        isRead: false,
        sendAt: new Date(2020, 1, 4, 13, 35),
        text: ['I will reverse whatever you send me']
      }
    ],
    selectedMessageId: 1
  },
  {
    id: 5,
    name: 'Waiting bot',
    messages: [
      {
        id: 1,
        author: 4,
        isRead: false,
        sendAt: new Date(2020, 1, 4, 13, 35),
        text: ['I will wait however many seconds you send me before responding. Try send in first line some number.']
      }
    ],
    selectedMessageId: 1
  }
];

// assets for StackBlitz

// https://picsum.photos/49/49

const mockUsers = [
  {
    id: 1,
    name: 'John',
    // avatarUrl: 'assets/img/avatar1.png'
    avatarUrl: 'https://picsum.photos/id/133/49/49'
  },
  {
    id: 2,
    name: 'Echo bot',
    // avatarUrl: 'assets/img/avatar2.png'
    avatarUrl: 'https://picsum.photos/id/174/49/49'
  },
  {
    id: 3,
    name: 'Reverse bot',
    // avatarUrl: 'assets/img/avatar3.png'
    avatarUrl: 'https://picsum.photos/id/490/49/49'
  },
  {
    id: 4,
    name: 'Waiting bot',
    // avatarUrl: 'assets/img/avatar4.png'
    avatarUrl: 'https://picsum.photos/id/435/49/49'
  }
];

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations
})
export class ChatComponent implements OnInit {
  totalUnreadMessagesNumber$ = this.store.select(getTotalUnreadMessagesNumber);

  constructor(
    private store: Store<ChatState>,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.prepareStore();
  }

  prepareStore() {
    this.store.dispatch(setThreads({threads: mockThreads}));
    this.store.dispatch(setUsers({users: mockUsers}));
    this.store.dispatch(selectUser({id: 1}));
  }

  logout() {
    this.authService.logoutUser();
  }

}
