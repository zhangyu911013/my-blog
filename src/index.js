import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Wrapper = () => 
  (<MuiThemeProvider>
    <App />
  </MuiThemeProvider>)

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
