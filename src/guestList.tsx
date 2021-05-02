import React, { useState } from 'react';

const GuestList: React.FC = () => {
	const [name, setName] = useState("");
	const [guests, setGuests] = useState<string[]>([]);

	function onClick(): void {
		setName("");
		setGuests([...guests, name])
	}

	return (
		<div>
			<h2>Guest List</h2>
			<ul>
				{guests.map(guest =>
					<li key={guest}>{guest}</li>
				)}
			</ul>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Add Guest</button>
		</div>
	)
}

export default GuestList;
