import * as React from 'react';

const Restaurant: React.FC<RestaurantProps> = (props) => {
	return (
		<>
			<main className="container">
				<section className="row">
					<div className="col-12">
						<h1 className="display-1 text-center">Restaurant View</h1>
					</div>
				</section>
			</main>
		</>
	
	)}

interface RestaurantProps {}

export default Restaurant;