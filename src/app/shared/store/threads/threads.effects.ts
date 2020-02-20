import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, withLatestFrom } from 'rxjs/operators';

import { addMessage, addBotMessage } from './threads.actions';

import { getSelectedUser } from '../users/users.selector';
import { getSelectedThread, getThreads } from './threads.selector';

import { ChatState } from '../../models/chat-state';
import { Message } from '../../models/threads-data';

import { ChatBotsService } from '../../../services/chat-bots.service';


@Injectable()
export class ThreadsEffects {
  addMessage$ = createEffect(() => this.actions$.pipe(
    ofType(addMessage),
    withLatestFrom(this.store.select(getSelectedUser), this.store.select(getSelectedThread)),
    mergeMap(([action, selectedUser, selectedThread]) => {
      const message: Message = {
        id: selectedThread.messages.length ? Math.max(...selectedThread.messages.map(x => x.id)) + 1 : 1,
        author: selectedUser.id,
        isRead: true,
        sendAt: action.sandAt,
        text: action.message
      };
      if (selectedThread.name === 'Echo bot') {
        setTimeout(() => {
          this.chatBotsService.echoBotMessage(message, selectedThread.id);
        });
      } else if (selectedThread.name === 'Reverse bot') {
        setTimeout(() => {
          this.chatBotsService.reverseBotMessage(message, selectedThread.id);
        });
      } else if (selectedThread.name === 'Waiting bot') {
        this.chatBotsService.waitingBotMessage(message, selectedThread.id);
      }
      return of({ type: '[ThreadsEffect] Add Message Success', message, threadId: selectedThread.id });
    })
  ));

  addBotMessage$ = createEffect(() => this.actions$.pipe(
    ofType(addBotMessage),
    withLatestFrom(this.store.select(getThreads)),
    mergeMap(([action, threads]) => {
      const selectedThread = threads.find(thread => thread.id === action.threadId);
      const message: Message = {
        id: selectedThread.messages.length ? Math.max(...selectedThread.messages.map(x => x.id)) + 1 : 1,
        author: action.author,
        isRead: false,
        sendAt: action.sandAt,
        text: action.message
      };
      return of({ type: '[ThreadsEffect] Add Bot Message Success', message, threadId: selectedThread.id });
    })
  ));

  constructor(
    private actions$: Actions,
    private store: Store<ChatState>,
    private chatBotsService: ChatBotsService
  ) {}
}
