import React, { Fragment } from 'react';

const NotFound = () => {
	return (
		<div className="container">
			<h1 className="x-large">
				<i className="fas fa-exclamation-triangle" /> Page Not Found
			</h1>
			<p className="large">sorry, this page does not exist</p>
		</div>
	);
};

export default NotFound;
