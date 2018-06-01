import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PersonService {

  constructor(private http: Http) { }

  get() {
    return this.http.get('/assets/mock.json')
              .toPromise()
              .then(res => res.json())
              .catch(err => {
                throw new Error('Error in request!')
              });
  }



}
