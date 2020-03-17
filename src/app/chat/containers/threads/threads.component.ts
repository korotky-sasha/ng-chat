import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { selectThread } from '../../../shared/store/threads/threads.actions';

import { getSelectedThread, getThreads } from '../../../shared/store/threads/threads.selector';
import { getUser } from '../../../shared/store/users/users.selector';

import { ChatState } from '../../../shared/models/chat-state';
import { Thread } from '../../../shared/models/threads-data';

interface ThreadEntities {
  [id: number]: Thread;
}

interface ThreadsObject {
  ids: number[];
  entities: ThreadEntities;
}

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadsComponent implements OnInit {
  threads$ = this.store.select(getThreads);
  selectedThread$ = this.store.select(getSelectedThread);
  selectedThread: Thread = null;
  threadIds = [];
  threadsObj: ThreadsObject = {
    ids: [],
    entities: {}
  };

  constructor(
    private store: Store<ChatState>,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.prepareStore();
  }

  prepareStore() {
    this.selectedThread$.subscribe(value => {
      this.selectedThread = value;
    });
    this.threads$.subscribe(value => {
      if (this.threadIds.length !== value.length) {
        this.threadIds = value.map(thread => thread.id);
        this.threadsObj.ids = this.threadIds;
      }
      let newThreadsObj = {};
      value.forEach(thread => {
        newThreadsObj = Object.assign(newThreadsObj, {[thread.id]: thread});
      });
      this.threadsObj.entities = newThreadsObj;
      this.ref.detectChanges();
    });
  }

  isThreadSelected(id: number) {
    return this.selectedThread && id === this.selectedThread.id;
  }

  selectThread(id: number) {
    if (!this.isThreadSelected(id)) {
      this.store.dispatch(selectThread({id}));
    }
  }

  getUser(id: number) {
    return  this.store.select(getUser, {id});
  }

  getLastMessage(thread: Thread) {
    return thread.messages[thread.messages.length - 1];
  }

}
