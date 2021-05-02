import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Users {
	id?: number;
	name: string;
	username?: string;
	email: string;
	address: {
		street: string;
		suite?: string;
		city: string;
		zipcode: string;
		geo?: {
			lat?: string;
			lng?: string;
		}
	},
	phone: string;
	website: string;
	company?: {
		name?: string;
		catchPhrase?: string;
		bs?: string
	}
}

type TUserList = Users[]

const UserSearch: React.FC = () => {
	const [name, setName] = useState("");
	const [allUser, setAllUser] = useState<TUserList | undefined>();
	const [user, setUser] = useState<Users | undefined>();

	useEffect(() => {
		axios.get<TUserList>('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				console.log(response.data);
				setAllUser(response.data);
			});
	}, [])

	function onClick() {
		if (allUser) {
			const foundUser = allUser.find(user => {
				return user.name.split(" ")[0] === name || user.name.split(" ")[1] === name || user.name.split(" ")[2] === name
			});

			setUser(foundUser);
		}
	}

	return (
		<div>
			<h2>User Search</h2>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={onClick}>Find User</button>
			<div>
				<h4>Our users:</h4>
				{allUser &&
					allUser.map(item => item.name).join(", ")
				}
			</div><br />
			<div>
				{user ?
					<div>
						{user.name}: <br />
						<ul>
							<li>Email: {user.email}</li>
							<li>Address: {user.address.zipcode} {user.address.city}, {user.address.street} str.</li>
							<li>Phone: {user.phone}</li>
							<li>Website: {user.website}</li>
						</ul>
					</div>
					: null
				}
			</div>
		</div>
	)
}

export default UserSearch;
