import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    
    <AppBar title="我的博客" titleStyle={{ textAlign: 'left' }} iconElementLeft={<img src={logo} className="App-logo" alt="logo" />} iconElementRight={<NavBtns/>}/>
  </div>
  
);
const NavBtns = () => (
  <div>
    <Link to="/"><FlatButton label="首页"/></Link>
    <Link to="/blog"><FlatButton label="博客"/></Link>
    <Link to="/about"><FlatButton label="关于"/></Link>
  </div>
);
