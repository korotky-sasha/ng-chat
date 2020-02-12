import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { UsersReducer } from './users/users.reducer';
import { ThreadsReducer } from './threads/threads.reducer';

import { ThreadsEffects } from './threads/threads.effects';

import { ChatState } from '../models/chat-state';

export const reducers: ActionReducerMap<ChatState> = {
  users: UsersReducer,
  threadsData: ThreadsReducer
};

export const effects: any[] = [ThreadsEffects];

export const metaReducers: MetaReducer<ChatState>[] = !environment.production ? [] : [];
