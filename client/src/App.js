import React, { createContext, useReducer } from 'react';
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About';
import Weather from './components/Weather';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';
import { initialState, reducer } from '../src/reducer/UseReducer';


export const UserContext = createContext();

const Routing = () => {
	return (
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

			<Route path="/logout">
				<Logout />
			</Route>

			<Route>
				<ErrorPage />
			</Route>
		</Switch>
	)
}

const App = () => {

	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<>
			<UserContext.Provider value={{ state, dispatch }}>

				<Navbar />
				<Routing />

			</UserContext.Provider>

		</>
	)
}

export default App;