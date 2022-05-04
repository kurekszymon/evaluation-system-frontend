import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EvalSystemService } from './eval-system.service';

describe('EvalSystemService', () => {
  let service: EvalSystemService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EvalSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
