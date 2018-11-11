import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost, faCross, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import App from './App';
import { darkTheme } from "./themes"

library.add(faGhost, faCross, faGithub, faShareAlt);

ReactDOM.render(
	<MuiThemeProvider theme={darkTheme}>
		<CssBaseline />
		<App />
	</MuiThemeProvider>,
	document.getElementById('root'));