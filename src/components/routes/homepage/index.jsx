import React from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader/Subheader';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
// import MobileTearSheet from 'material-ui';

import listData from '../../../data/articles';
import './style.css';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const articleCards = listData.data.map((entry) => {
      return (
        <Card containerStyle={containerStyle} key={entry.id}>
          <CardHeader title={entry.title} subtitle={entry.publishDate}/>
          <CardText>
            {entry.summary}
          </CardText>
        </Card>
      )
    })
    return (
      <div className="homepage-body">
        <div className="card-list">
          {articleCards}
        </div>
        <div className="left-sidebar">
            <Subheader>搜索</Subheader>
            <TextField hintText="搜索关键字"/>
            <Subheader>标签</Subheader>
            <List>
              <ListItem primaryText="react" rightIcon={<ActionInfo />} />
              <ListItem primaryText="css" rightIcon={<ActionInfo />} />
              <ListItem primaryText="node" rightIcon={<ActionInfo />} />
              <ListItem primaryText="mysql" rightIcon={<ActionInfo />} />
            </List>
        </div>
      </div>
    )
  }
}

const containerStyle = {
  // width: 500,
  marginBottom: 20,
}

export default HomePage;