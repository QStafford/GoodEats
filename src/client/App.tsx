import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home";
import Createuser from "./pages/CreateUser";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Restaurant from "./pages/Restaurant";
import Suggestions from "./pages/Suggestions";
import Users from "./pages/User";
import Post from "./pages/Post";

import Navbar from "./components/Navbar"

const App: React.FC<AppProps> = (props) => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route  path="/" element={<Home />} />
				<Route  path="/create" element={<Createuser />} />
				<Route  path="/edit" element={<Edit />} />
				<Route  path="/login" element={<Login />} />
				<Route  path="/restaurant/:id" element={<Restaurant />} />
				<Route  path="/suggestions" element={<Suggestions />} />
				<Route  path="/user/:id" element={<Users />} />
				<Route  path="/post" element={<Post />} />

			</Routes>
		</BrowserRouter>

	)
}

interface AppProps { }

export default App;
