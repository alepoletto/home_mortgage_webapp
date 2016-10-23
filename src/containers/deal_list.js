import React, { Component } from 'react';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import Card from '../components/card';




class DealList extends Component {

  renderCards(data) {
    if(!data.deals){
      return <div>no love</div>
    }
    return data.deals.map( deal => {
      return (
        <div className="col-md-4">
          <Card title={deal.title}
            mpayment={deal.mPayment}
            dpayment={deal.dPayment}
            apr={deal.total}
            rate={deal.rate}
            paymentsByYear={deal.monthlyDebts} />
        </div>
      );
    });
  }


  render() {
    const { lon, lat } = this.props.deal.data.city.coord;

      return (
        <div>
          <div>
            <GoogleMap lon={lon} lat={lat} />
          </div>

          {this.renderCards(this.props.deal.data)}
        </div>
    );
  }
}

export default DealList;
