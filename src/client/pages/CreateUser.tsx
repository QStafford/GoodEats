import * as React from 'react';

const createUser: React.FC<createUserProps> = (props) => {
	return (
		<>
			<main className="container">
				<section className="row">
					<div className="col-12">
						<h1 className="display-1 text-center">Create User View</h1>
					</div>
				</section>
			</main>
		</>
	
	)}

interface createUserProps {}

export default createUser;