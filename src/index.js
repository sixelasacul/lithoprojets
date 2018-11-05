import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost, faCross } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import App from './App';

const darkTheme = createMuiTheme({
	typography: {
		useNextVariants: true
	},
	palette: {
		primary: {
			main: blueGrey[900]
		},
		secondary: {
			main: grey[900]
		},
		error: {
			main: red[900]
		},
		type: "dark"
	}
});

library.add(faGhost);
library.add(faCross);
library.add(faGithub);

ReactDOM.render(
	<MuiThemeProvider theme={darkTheme}>
		<CssBaseline />
		<App />
	</MuiThemeProvider>,
	document.getElementById('root'));