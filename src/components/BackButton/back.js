import React from 'react';

const Back = () => {
	const back = () => {
		window.history.back();
	};
	return (
		<button onClick={back} id='back'>
			Back
		</button>
	);
};

export default Back;
