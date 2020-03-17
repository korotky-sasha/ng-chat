import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { provideMockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';

import { ThreadsComponent } from './chat/containers/threads/threads.component';
import { MessagesComponent } from './chat/containers/messages/messages.component';
import { ThreadPreviewComponent } from './chat/components/thread-preview/thread-preview.component';
import { MessageSendTimePipe } from './chat/pipes/message-send-time.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ThreadsComponent,
        MessagesComponent,
        ThreadPreviewComponent,
        MessageSendTimePipe
      ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [
        DatePipe,
        provideMockStore()
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  /*it(`should have as title 'ng-chat'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-chat');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ng-chat app is running!');
  });*/
});
