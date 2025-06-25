import { Injectable } from '@angular/core';
import { ConfigOptions } from './config-options';

@Injectable({
  providedIn: 'root'
})
export class LibAService {

  constructor() { }

  get options(): ConfigOptions {
    return {
      featA: {
        featAOption1: 'default value for featAOption1'
      },
      featB: {
        featBOption1: 'default value for featBOption1'
      }
    };
  }
}
