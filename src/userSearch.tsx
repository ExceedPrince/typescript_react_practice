import React, { useState } from 'react';

const users = [
	{ name: "Sarah", age: 20 },
	{ name: "James", age: 25 },
	{ name: "Jack", age: 35 }
]

const UserSearch: React.FC = () => {
	const [name, setName] = useState("");
	const [user, setUser] = useState<{ name: string, age: number } | undefined>();

	function onClick() {
		const foundUser = users.find(user => {
			return user.name === name
		});

		setUser(foundUser);
	}

	return (
		<div>
			<h2>User Search</h2>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={onClick}>Find User</button>
			<div>
				{user && user.name}
				{user && user.age}
			</div>
		</div>
	)
}

export default UserSearch;
