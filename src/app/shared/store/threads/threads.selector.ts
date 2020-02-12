import { createSelector } from '@ngrx/store';

import { ChatState } from '../../models/chat-state';

export const getThreadsData = (state: ChatState) => {
  return state.threadsData;
};

export const getThreads = createSelector(
  getThreadsData,
  (threadsData) => {
    return threadsData.threads;
  }
);


export const getSelectedThread = createSelector(
  getThreadsData,
  (threadsData) => {
    return threadsData.threads.find(thread => {
      return thread.id === threadsData.selectedThread;
    });
  }
);

export const getTotalUnreadMessagesNumber = createSelector(
  getThreadsData,
  (threadsData) => {
    let total = 0;
    threadsData.threads.forEach( thread => {
      thread.messages.forEach(message => {
        if (!message.isRead) {
          total++;
        }
      });
    });
    return total;
  }
);
