import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ProjectList from './ProjectList'
import ProjectDetails from './ProjectDetails'

class App extends Component {
	render() {
		return (
			<BrowserRouter basename='/'>
				<Switch>
					<Route path='/' component={ProjectList} />
					<Route path='/:name' component={ProjectDetails} />
					<Redirect to='/' />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
