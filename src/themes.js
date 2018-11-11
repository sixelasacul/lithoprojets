import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';

export const darkTheme = createMuiTheme({
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

export const listIconTheme = createMuiTheme({
	...darkTheme,
	palette: {
		...darkTheme.palette,
		primary: {
			main: grey[50]
		}
	}
});

export const easterEggTheme = createMuiTheme({
	...darkTheme,
	palette: {
		...darkTheme.palette,
		primary: {
			main: orange[900]
		}
	}
});