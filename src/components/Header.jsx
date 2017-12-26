import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import logo from '../logo.svg';

export default () => (
  <div>
    
    <AppBar title="我的博客" titleStyle={{ textAlign: 'left' }} iconElementLeft={<img src={logo} className="App-logo" alt="logo" />} iconElementRight={<NavBtns/>}/>
  </div>
  
);
const NavBtns = () => (
  <div>
    <FlatButton label="首页"/>
    <FlatButton label="博客"/>
    <FlatButton label="关于"/>
  </div>
);
