/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductosserviceService } from './productosservice.service';

describe('Service: Productosservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductosserviceService]
    });
  });

  it('should ...', inject([ProductosserviceService], (service: ProductosserviceService) => {
    expect(service).toBeTruthy();
  }));
});
