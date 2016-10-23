import React, { Component } from 'react';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import theme from '../../style/header_style.scss';


export default class App extends Component {

  render() {
    const actions = [
    { label: 'Contact', raised: true},
    { label: 'About us', raised: true}
    ];
    return (
      <div>
        <AppBar title="First Time Home Buyers" theme={theme} relative flat>
          <Navigation type='horizontal' actions={actions} />
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}
