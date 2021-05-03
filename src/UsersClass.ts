import { Users } from './index';

export class UsersClass implements Users {
	name: string;
	email: string;
	address: {
		street: string,
		city: string,
		zipcode: string,
	};
	phone: string;
	website: string;


	constructor(name: string,
		email: string,
		address: {
			street: string,
			city: string,
			zipcode: string,
		},
		phone: string,
		website: string) {
		this.name = name;
		this.email = email;
		this.address = {
			street: address.street,
			city: address.city,
			zipcode: address.zipcode
		};
		this.phone = phone;
		this.website = website;
	}
}