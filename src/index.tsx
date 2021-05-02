import React from 'react';
import ReactDOM from 'react-dom';

import GuestList from './guestList';
import UserSearch from './userSearch';

const Index = () => {
	return (
		<>
			<GuestList />
			<UserSearch />
		</>
	)
}

ReactDOM.render(<Index />, document.getElementById("root"));
