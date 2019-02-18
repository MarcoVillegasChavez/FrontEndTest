import { TestBed } from '@angular/core/testing';

import { UsuariosChatsService } from './usuarios-chats.service';

describe('UsuariosChatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuariosChatsService = TestBed.get(UsuariosChatsService);
    expect(service).toBeTruthy();
  });
});
