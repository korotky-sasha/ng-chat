import { Component, Input } from '@angular/core';

import { Thread } from '../../../shared/models/threads-data';
import { User } from '../../../shared/models/users-data';
import { animations } from './thread-preview.animations';

import { AVATAR_PLACEHOLDER } from '../../../shared/constants/avatar.constant';

@Component({
  selector: 'app-thread-preview',
  templateUrl: './thread-preview.component.html',
  styleUrls: ['./thread-preview.component.scss'],
  animations
})


export class ThreadPreviewComponent {
  @Input() thread: Thread;
  @Input() author: User;

  getLastMessage() {
    return  this.thread.messages[this.thread.messages.length - 1];
  }

  get unreadCount() {
    return this.thread ? this.thread.messages.filter( (message) => !message.isRead).length : null;
  }

  invalidImage(event) {
    console.log('Error');
    event.target.src = AVATAR_PLACEHOLDER;
  }

}
