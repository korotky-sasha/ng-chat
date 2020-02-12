import { Action, createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash-es';

import * as ThreadsActions from './threads.actions';
import { ThreadsData } from '../../models/threads-data';


const initialState: ThreadsData = {
  threads: [],
  selectedThread: null,
};

const usersReducer = createReducer(
  initialState,
  on(ThreadsActions.setThreads, (state, props) => {
    const newState = cloneDeep(state);
    newState.threads = props.threads;
    return newState;
  }),
  on(ThreadsActions.selectThread, (state, props) => {
    const newState = cloneDeep(state);
    newState.selectedThread = props.id;
    newState.threads = newState.threads.map(thread => {
      if (thread.id === props.id) {
        thread.messages = thread.messages.map(message => {
          message.isRead = true;
          return message;
        });
        return thread;
      } else {
        return thread;
      }
    });
    return newState;
  }),
  on(
    ThreadsActions.addMessageSuccess,
    ThreadsActions.addBotMessageSuccess, (state, props) => {
    const newState = cloneDeep(state);
    newState.threads = newState.threads.map( thread => {
      if (thread.id !== props.threadId) {
        return thread;
      } else {
        const newThread = cloneDeep(thread);
        const newMessage = cloneDeep(props.message);
        if (props.threadId === state.selectedThread) {
          newMessage.isRead = true;
        }
        newThread.messages.push(newMessage);
        return newThread;
      }
    });
    return newState;
  }),
);

export function ThreadsReducer(state: ThreadsData, action: Action) {
  return usersReducer(state, action);
}
