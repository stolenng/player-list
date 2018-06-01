import Address from '../models/Address';

export default interface IPerson {
    profileImageURL: string;
    industry: Array<string>;
    lastUpdatedDate: string;
    name: string;
    title: string;
    companyLogo: string;
    companyName: string;
    companyAddress: Address;
    companyRevenue: string;
    companyEmployees: number;
    companyDomain: string;
    id: number;
    parentId: number;
    level: number;
}
