import IPerson from '../interfaces/IPerson';
import Address from '../models/Address';

export default class Person implements IPerson {
    constructor(public profileImageURL: string,
        public industry: Array<string>,
        public lastUpdatedDate: string,
        public name: string,
        public title: string,
        public companyLogo: string,
        public companyName: string,
        public companyAddress: Address,
        public companyRevenue: string,
        public companyEmployees: number,
        public companyDomain: string,
        public id: number,
        public parentId: number,
        public level: number) {
        
            this.profileImageURL = profileImageURL;
            this.industry = Array.isArray(industry) ? industry : [industry];
            this.lastUpdatedDate = lastUpdatedDate;
            this.name = name;
            this.title = title;
            this.companyLogo = companyLogo;
            this.companyName = companyName;
            this.companyAddress = companyAddress;
            this.companyRevenue = companyRevenue;
            this.companyEmployees = companyEmployees;
            this.companyDomain = companyDomain;
            this.id = id;
            this.parentId = parentId;
            this.level = level;
    }

}