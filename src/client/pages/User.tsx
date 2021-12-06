import * as React from 'react';

const User: React.FC<UserProps> = (props) => {

	document.body.className = "user-bg";

	return (
		<>
			<main className="container">
				<section className="row">
					<div className="col-12">
						<h1 className="display-1 text-center">User View</h1>
					</div>
				</section>
			</main>
		</>
	
	)}

interface UserProps {}

export default User;