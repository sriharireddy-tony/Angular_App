import { TestBed } from '@angular/core/testing';

import { ErrorHandlerInterceptorInterceptor } from './error-handler-interceptor.interceptor';

describe('ErrorHandlerInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorHandlerInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorHandlerInterceptorInterceptor = TestBed.inject(ErrorHandlerInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
