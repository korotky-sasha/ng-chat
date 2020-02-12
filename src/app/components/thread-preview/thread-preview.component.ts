import { Component, Input } from '@angular/core';

import { Thread } from '../../shared/models/threads-data';
import { User } from '../../shared/models/users-data';

@Component({
  selector: 'app-thread-preview',
  templateUrl: './thread-preview.component.html',
  styleUrls: ['./thread-preview.component.scss']
})
export class ThreadPreviewComponent {
  @Input() thread: Thread;
  @Input() author: User;

  getLastMessage() {
    return  this.thread.messages[this.thread.messages.length - 1];
  }

  getUnreadCount() {
    return this.thread ? this.thread.messages.filter( (message) => !message.isRead).length : null;
  }

}
