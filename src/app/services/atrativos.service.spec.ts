import { TestBed } from '@angular/core/testing';

import { AtrativosService } from './atrativos.service';

describe('AtrativosService', () => {
  let service: AtrativosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtrativosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
