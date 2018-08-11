import { Injectable } from '@angular/core';
import { ApiService } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(
    private api: ApiService
  ) { }
}
