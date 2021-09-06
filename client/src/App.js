import React from 'react';
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About';
import Weather from './components/Weather';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';

const App = () => {
	return (
		<>
			<Navbar />

			<Switch>

				<Route exact path="/">
					<Home />
				</Route>

				<Route path="/about">
					<About />
				</Route>

				<Route path="/weather">
					<Weather />
				</Route>

				<Route path="/contact">
					<Contact />
				</Route>

				<Route path="/login">
					<Login />
				</Route>

				<Route path="/register">
					<Register />
				</Route>

				<Route>
					<ErrorPage />
				</Route>
			</Switch>
		</>
	)
}

export default App;