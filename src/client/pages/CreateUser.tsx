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
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="New Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Create Password"></input>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Confirm Password"></input>
            </div>
            <div className="input-group mb-3">
                <input type="Email" className="form-control" placeholder="Email"></input>
            </div>
		</>
	
	)}

interface createUserProps {}

export default createUser;