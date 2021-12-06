import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from "./Pages/Home";
import Createuser from "./Pages/CreateUser";
import Edit from "./Pages/Edit";
import Login from "./Pages/Login";
import Restaurants from "./Pages/Restaurant";
import Suggestions from "./Pages/Suggestions";
import Users from "./Pages/User";
import Post from "./Pages/Post";
import Navbar from "./components/Navbar"

const App: React.FC<AppProps> = (props) => {
	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Create" element={<Createuser />} />
					<Route path="/Edit" element={<Edit />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Restaurants" element={<Restaurants />} />
					<Route path="/Suggestions" element={<Suggestions />} />
					<Route path="/User" element={<Users />} />
					<Route path="/Post" element={<Post />} />
				</Routes>
			</main>
		</BrowserRouter>

	)
}

interface AppProps { }

export default App;
