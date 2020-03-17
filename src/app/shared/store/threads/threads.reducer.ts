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
    return {...state, selectedThread: props.id};
  }),
  on(
    ThreadsActions.addMessageSuccess,
    ThreadsActions.addBotMessageSuccess, (state, props) => {
      const newThreads = state.threads.map( thread => {
        if (thread.id !== props.threadId) {
          return thread;
        } else {
          const newThread = cloneDeep(thread);
          const newMessage = cloneDeep(props.message);
          if (props.threadId === state.selectedThread) {
          }
          newThread.messages.push(newMessage);
          return newThread;
        }
      });
      return {threads: newThreads, selectedThread: state.selectedThread};
  }),
  on(ThreadsActions.readMessage, (state, props) => {
    const newThreads = state.threads.map(thread => {
      if (thread.id === state.selectedThread) {
        let changed = false;
        const newMessages = thread.messages.map(message => {
          if (message.id === props.id && !message.isRead) {
            changed = true;
          }
          return changed ? {...message, isRead: true} : message;
        });
        return changed ? {...thread, messages: newMessages} : thread;
      } else {
        return thread;
      }
    });
    return {threads: newThreads, selectedThread: state.selectedThread};
  }),
);

export function ThreadsReducer(state: ThreadsData, action: Action) {
  return usersReducer(state, action);
}
