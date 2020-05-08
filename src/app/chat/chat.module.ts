import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ChatRoutingModule } from './chat-routing.module';

import { ChatComponent } from './containers/chat/chat.component';
import { ThreadsComponent } from './containers/threads/threads.component';
import { MessagesComponent } from './containers/messages/messages.component';
import { ThreadPreviewComponent } from './components/thread-preview/thread-preview.component';
import { MessageComponent } from './components/message/message.component';

import { MessageSendTimePipe } from './pipes/message-send-time.pipe';


@NgModule({
  declarations: [
    ChatComponent,
    ThreadsComponent,
    MessagesComponent,
    ThreadPreviewComponent,
    MessageComponent,
    MessageSendTimePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatRoutingModule
  ],
  providers: [
    MessageSendTimePipe,
    DatePipe
  ]
})
export class ChatModule { }
