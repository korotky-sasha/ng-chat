import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { ChatBotsService } from './chat-bots.service';

describe('ChatBotsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      provideMockStore()
    ]
  }));

  it('should be created', () => {
    const service: ChatBotsService = TestBed.inject(ChatBotsService);
    expect(service).toBeTruthy();
  });
});
