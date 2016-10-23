import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchIndex from '../components/search_index';
import DealList from './deal_list';


class Home extends Component {


  render() {
    console.log(this.props.deal);
    if(!this.props.deal) {
      return <SearchIndex />
    }
    return <DealList deal={this.props.deal} />
  }
}

function mapStateToProps(state){
  return {
      deal: state.deal
  };
}

export default connect(mapStateToProps)(Home);
