import React, { useState } from 'react';

import { Users, TUserList } from './index';

interface PropType {
	allUser: TUserList;
}

const UserSearch: React.FC<PropType> = ({ allUser }) => {
	const [name, setName] = useState("");
	const [user, setUser] = useState<Users | undefined>();

	function onClick() {
		if (allUser && name.length > 2) {
			const foundUser = allUser.find(user => {
				return user.name.toLowerCase().indexOf(name) > - 1
			});

			setUser(foundUser);
		} else {
			setUser(undefined);
		}
	}

	return (
		<div>
			<h2>User Search</h2>
			<input type="text" minLength={+"3"} value={name} onChange={e => setName(e.target.value)} required />
			<button onClick={onClick}>Find User</button>
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
