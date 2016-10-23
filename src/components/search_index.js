import React, { Component } from 'react';
import SearcForm from '../containers/search_form'
import {Grid, Row, Col} from 'react-flexbox-grid';
import theme from '../../style/header_style.scss';
import { Panel } from 'react-toolbox';


export default (props) => {

    return (
      <Panel theme={theme} >
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={4}>
                <h2>Search the best mortgage deals</h2>
<h3>Apply for a mortgage & Achieve your dreams</h3>
                <SearcForm />
              </Col>
            </Row>
          </Col>
        </Row>
      </Panel>
    );

}
