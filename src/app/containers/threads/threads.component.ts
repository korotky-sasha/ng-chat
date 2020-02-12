import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { selectThread } from '../../shared/store/threads/threads.actions';

import { getSelectedThread, getThreads } from '../../shared/store/threads/threads.selector';
import { getUser } from '../../shared/store/users/users.selector';

import { ChatState } from '../../shared/models/chat-state';
import { Thread } from '../../shared/models/threads-data';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {
  threads$ = this.store.select(getThreads);
  selectedThread$ = this.store.select(getSelectedThread);
  selectedThread: Thread = null;

  constructor(
    private store: Store<ChatState>
  ) { }

  ngOnInit() {
    this.prepareStore();
  }

  prepareStore() {
    this.selectedThread$.subscribe(value => {
      this.selectedThread = value;
    });
  }

  isThreadSelected(id: number) {
    return this.selectedThread && id === this.selectedThread.id;
  }

  selectThread(id: number) {
    this.store.dispatch(selectThread({id}));
  }

  getUser(id: number) {
    return  this.store.select(getUser, {id});
  }

  getLastMessage(thread: Thread) {
    return thread.messages[thread.messages.length - 1];
  }

}
