import React from 'react';
import Chart from './chart';
import theme from '../../style/card.scss';
import {AppBar, Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

export default (props) => {
  const temps = props.paymentsByYear;
    return (
      <div className="small-space">
        <Card theme={theme} style={{width: '350px'}}>
          <CardTitle theme={theme}
            title={props.title}
          />
        <div className="row">
          <div className="col-md-4 col-md-offset-1 small-tile">Mountly Payments</div>
          <div className="col-md-4 col-md-offset-1 small-tile">Down Payments</div>

          <div className="col-md-4 col-md-offset-1 small-value">$ {props.mpayment}</div>
          <div className="col-md-4 col-md-offset-1 small-value">$ {props.dpayment}</div>
  </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-1 small-tile">Total</div>
          <div className="col-md-4 col-md-offset-1 small-tile">Rates</div>
            </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-1 small-value">$ {props.apr}</div>
          <div className="col-md-4 col-md-offset-1 small-value">{props.rate} %</div>

        </div>
        <Chart data={temps} color="orange"  />
        </Card>
      </div>
    );

}
