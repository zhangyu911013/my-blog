import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import IconButton from 'material-ui/IconButton';
import ActionReorder from 'material-ui/svg-icons/action/reorder';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends React.Component{

  render(){
    return (
    <div>
      <AppBar title="我的博客" iconElementLeft={<img src={logo} className="App-logo" alt="logo" />} iconElementRight={<NavBtns/>} style={appBarStyle}/>
    </div>
    )
  }   
};
const NavBtns = () => (
  <div>
    <MediaQuery query="(min-width: 768px)">
      <Link to="/"><FlatButton label="首页" {...customBtnProps}/></Link>
      <Link to="/blog"><FlatButton label="博客" {...customBtnProps}/></Link>
      <Link to="/about"><FlatButton label="关于" {...customBtnProps}/></Link>
    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
      <IconMenu
        iconButtonElement={<IconButton><ActionReorder color="white"/></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
      >
        <MenuItem primaryText="首页" containerElement={<Link to="/"/>}/>
        <MenuItem primaryText="博客" containerElement={<Link to="/blog"/>}/>
        <MenuItem primaryText="关于" containerElement={<Link to="/about"/>}/>
      </IconMenu>
    </MediaQuery>
  </div>
  
);


const appBarStyle = {
  position: 'fixed',
  top: 0,
}

const customBtnProps = {
  disableTouchRipple: true,
  style: {
    color: 'white'
  },
  hoverColor: 'transparent'
}
