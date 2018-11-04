import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import ProjectList from "./ProjectList"
import ProjectDetails from "./ProjectDetails"

class App extends Component {
	render() {
		return (
			<HashRouter basename="/">
				<Switch>
					<Route path="/:id" component={ProjectDetails} />
					<Route path="/" component={ProjectList} />
					<Redirect to="/" />
				</Switch>
			</HashRouter>
		);
	}
}

export default App;
