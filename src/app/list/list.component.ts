import { Component, OnInit } from '@angular/core';
import { PersonService } from './services/person.service';

import Person from './models/Person';
import Address from './models/Address';

@Component({
  selector: 'person-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  persons: Array<Person> = [];

  constructor(private personSrv: PersonService) { }

  ngOnInit() {
    this.personSrv.get().then(res => {
      this.persons = res.map(person => {
        return new Person(person.profileImageURL, person.industry, person.lastUpdatedDate,
                          person.name, person.title, person.companyLogo, person.companyName,
                          new Address(person.companyAddress.Street, person.companyAddress.City, person.companyAddress.State, person.companyAddress.Zip, person.companyAddress.CountryCode),
                          person.companyRevenue, person.companyEmployees, person.companyDomain, person.id,
                          person.parentId, person.level);
      });
    });
  }

}
