import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/reset.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/routes/homepage';
import Blog from './components/routes/blog';
import About from './components/routes/about';
import RaisedButton from 'material-ui/RaisedButton';

import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
