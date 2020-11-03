import { TestBed } from '@angular/core/testing';

import { UsuarioGuard } from './usuario.guard';

describe('UsuarioGuard', () => {
  let guard: UsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
