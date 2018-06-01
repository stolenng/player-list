import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Person from '../models/Person';
import IPerson from '../interfaces/IPerson';

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
