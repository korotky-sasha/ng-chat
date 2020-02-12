import { TestBed } from '@angular/core/testing';

import { ChatBotsService } from './chat-bots.service';

describe('ChatBotsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatBotsService = TestBed.get(ChatBotsService);
    expect(service).toBeTruthy();
  });
});
