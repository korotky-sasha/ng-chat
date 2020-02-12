import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducers, metaReducers, effects } from './shared/store';
import { environment } from '../environments/environment';
import { MessageSendTimePipe } from './pipes/message-send-time.pipe';
import { ThreadPreviewComponent } from './components/thread-preview/thread-preview.component';
import { ThreadsComponent } from './containers/threads/threads.component';
import { MessagesComponent } from './containers/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageSendTimePipe,
    ThreadPreviewComponent,
    ThreadsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot(effects),
  ],
  providers: [MessageSendTimePipe, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
