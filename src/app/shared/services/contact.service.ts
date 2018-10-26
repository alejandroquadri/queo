import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private api: ApiService
  ) { }

  sendQuery(query) {
    return this.api.post('query-quadri', query);
  }

  saveQuery(query) {
    return this.api.push('queo/queries', query);
  }

}
