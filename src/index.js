import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();