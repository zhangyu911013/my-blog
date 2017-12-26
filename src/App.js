import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Header />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
