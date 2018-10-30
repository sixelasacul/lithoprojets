import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost, faCross } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(faGhost);
library.add(faCross);

ReactDOM.render(<App />, document.getElementById('root'));