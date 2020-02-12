import { createAction, props } from '@ngrx/store';
import { Message, Thread } from '../../models/threads-data';

export const setThreads = createAction(
  '[AppComponent] Set Threads',
  props<{threads: Thread[]}>()
);

export const selectThread = createAction(
  '[ThreadsComponent] Select Thread',
  props<{id: number}>()
);

export const addMessage = createAction(
  '[MessagesComponent] Add Message',
  props<{message: string[], sandAt: Date}>()
);

export const addMessageSuccess = createAction(
  '[ThreadsEffect] Add Message Success',
  props<{message: Message, threadId: number}>()
);

export const addBotMessageSuccess = createAction(
  '[ChatBotsService] Add Bot Message Success',
  props<{message: Message, threadId: number}>()
);
