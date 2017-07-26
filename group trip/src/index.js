import React from 'react';
import ReactDOM from 'react-dom';
// import './easy-autocomplete.min.css'
import './styles/index.css';
// import './styles/bootstrap-responsive.min.css'
// import './styles/bootstrap.min.css'
// import './js/bootstrap.min.js'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
