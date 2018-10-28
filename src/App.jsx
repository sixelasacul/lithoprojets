import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ProjectList from './ProjectList'
import ProjectDetails from './ProjectDetails'

class App extends Component {
	render() {
		return (
			<BrowserRouter basename='/'>
				<Switch>
					<Route path='/:id' component={ProjectDetails} />
					<Route path='/' component={ProjectList} />
					<Redirect to='/' />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
