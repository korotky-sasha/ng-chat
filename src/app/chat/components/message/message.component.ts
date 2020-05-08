import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from '../../../shared/models/threads-data';
import { User } from '../../../shared/models/users-data';

import { AVATAR_PLACEHOLDER } from '../../../shared/constants/avatar.constant';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Input() user: User;
  @Input() isSelectedUser: boolean;
  @Input() currentTime$: Observable<Date>;

  constructor() { }

  ngOnInit() {
  }

  invalidImage(event) {
    console.log('Error');
    event.target.src = AVATAR_PLACEHOLDER;
  }

}
