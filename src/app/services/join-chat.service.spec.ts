import { TestBed } from '@angular/core/testing';

import { JoinChatService } from './join-chat.service';

describe('JoinChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoinChatService = TestBed.get(JoinChatService);
    expect(service).toBeTruthy();
  });
});
