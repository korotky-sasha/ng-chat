import { Injectable } from '@angular/core';

import { cloneDeep } from 'lodash-es';
import { Store } from '@ngrx/store';

import { addBotMessage } from '../../shared/store/threads/threads.actions';

import { ChatState } from '../../shared/models/chat-state';
import { Message } from '../../shared/models/threads-data';


@Injectable({
  providedIn: 'root'
})
export class ChatBotsService {
  echoBotId = 2;
  reverseBotId = 3;
  waitingBotId = 4;
  selectedThread = null;

  constructor(
    private store: Store<ChatState>
  ) { }

  echoBotMessage(message: Message, threadId: number) {
    const botMessage = cloneDeep(message);
    botMessage.author = this.echoBotId;
    botMessage.sendAt = new Date();
    this.store.dispatch(addBotMessage({message: botMessage.text, threadId, sandAt: botMessage.sendAt, author: botMessage.author}));
  }

  reverseBotMessage(message: Message, threadId: number) {
    const botMessage = cloneDeep(message);
    botMessage.author = this.reverseBotId;
    botMessage.sendAt = new Date();
    botMessage.text = botMessage.text.map(line => {
      return line.split('').reverse().join('');
    });
    this.store.dispatch(addBotMessage({message: botMessage.text, threadId, sandAt: botMessage.sendAt, author: botMessage.author}));
  }

  waitingBotMessage(message: Message, threadId: number) {
    let waitTime = 0;
    const botMessage = cloneDeep(message);
    botMessage.author = this.waitingBotId;
    const input = +botMessage.text[0];
    if (input) {
      waitTime = input;
      botMessage.text[0] = `Respond from Waiting Bot after ${waitTime} seconds`;
    } else {
      botMessage.text[0] = 'Try to send a number of seconds I should wait in first line of your message.';
    }
    setTimeout(() => {
      botMessage.sendAt = new Date();
      this.store.dispatch(addBotMessage({message: botMessage.text, threadId, sandAt: botMessage.sendAt, author: botMessage.author}));
    }, waitTime * 1000);
  }
}
