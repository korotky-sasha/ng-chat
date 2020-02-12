import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { addMessage } from '../../shared/store/threads/threads.actions';

import { getSelectedThread } from '../../shared/store/threads/threads.selector';
import { getSelectedUser, getUser } from '../../shared/store/users/users.selector';

import { ChatState } from '../../shared/models/chat-state';
import { Thread } from '../../shared/models/threads-data';
import { User } from '../../shared/models/users-data';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  selectedThread$ = this.store.select(getSelectedThread);
  selectedThread: Thread = null;
  selectedUser$ = this.store.select(getSelectedUser);
  selectedUser: User = null;
  currentTime$ = timer(0, 60000).pipe(
    map( () => {
      return new Date();
    })
  );
  messageForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ChatState>,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.buildForm();
    this.prepareStore();
  }

  buildForm() {
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required]
    });
  }

  prepareStore() {
    this.selectedThread$.subscribe(value => {
      this.selectedThread = value;
      this.scrollToBottom();
    });
    this.selectedUser$.subscribe(value => {
      this.selectedUser = value;
    });
  }

  getUser(id: number) {
    return  this.store.select(getUser, {id});
  }

  isSelectedUser(id: number) {
    return id === this.selectedUser.id;
  }

  sendMessage(message: string) {
    this.messageForm.reset();
    const multiline = message.split('\n');
    this.store.dispatch(addMessage({message: multiline, sandAt: new Date()}));
  }

  scrollToBottom() {
    const scrollableElement: any = this.el.nativeElement.querySelector('.messages-container');
    if (scrollableElement) {
      setTimeout(() => {
        scrollableElement.scrollTo(0, scrollableElement.scrollHeight);
      }, 50);
    }
  }

}
