import IAddress from "../interfaces/IAddress";

export default class Address implements IAddress {
    constructor(public street: string, public city: string, public state: string, public zip: number, public countryCode: string) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.countryCode = countryCode;
    }
}