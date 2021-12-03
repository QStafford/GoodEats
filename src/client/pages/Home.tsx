import * as React from 'react';

import Map from '../components/Map'; 

const Home: React.FC<HomeProps> = (props) => {
	return (
		<>
			<main className="container" style={{ margin: '0 auto'}}>
						<Map />
			</main>
		</>
	
	)}

interface HomeProps {}

export default Home;