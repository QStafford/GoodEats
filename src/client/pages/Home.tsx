import * as React from 'react';

import Map from '../components/Map'; 

const Home: React.FC<HomeProps> = (props) => {

	document.body.className = "home-bg";

	return (
		<>
			<main className="container map-container" style={{ margin: '0 auto'}}>
						<Map />
			</main>
		</>
	
	)}

interface HomeProps {}

export default Home;