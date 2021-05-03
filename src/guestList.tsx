import React, { useState } from 'react';

import { TUserList } from './index';
import { UsersClass } from './UsersClass';

interface PropType {
	allUser: TUserList;
	newUser: (param: TUserList) => void
}

const GuestList: React.FC<PropType> = ({ allUser, newUser }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [phone, setPhone] = useState("");
	const [website, setWebsite] = useState("");

	function onClick(): void {
		if (name.length > 2) {
			setName("");
			setEmail("");
			setStreet("");
			setCity("");
			setZipcode("");
			setPhone("");
			setWebsite("");
			newUser([...allUser, new UsersClass(name, email, { street: street, city: city, zipcode: zipcode }, phone, website)])
		}
	}

	return (
		<div>
			<h2>User List</h2>
			<ul>
				{allUser &&
					allUser.map((item, index) =>
						<li key={item.name + index}>{item.name}</li>)
				}
			</ul>
			<label htmlFor="text">Name: </label>
			<input type="text" minLength={+"3"} value={name} onChange={(e) => setName(e.target.value)} required /> <br />
			<label htmlFor="email">Email: </label>
			<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
			<label htmlFor="street">Street: </label>
			<input type="text" value={street} onChange={(e) => setStreet(e.target.value)} /> <br />
			<label htmlFor="city">City: </label>
			<input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> <br />
			<label htmlFor="zipcode">Zipcode: </label>
			<input type="number" value={zipcode} onChange={(e) => setZipcode(e.target.value)} /> <br />
			<label htmlFor="phone">Phone: </label>
			<input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />
			<label htmlFor="website">Website: </label>
			<input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} /> <br />
			<button onClick={onClick}>Add User</button>
		</div>
	)
}

export default GuestList;
