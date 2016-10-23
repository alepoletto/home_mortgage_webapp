import React, { Component } from 'react';
import { fetchDeals } from '../actions/index';
import { Input } from 'react-toolbox/lib/input';
import { Slider } from 'react-toolbox/lib/slider';
import theme from '../../style/input_style';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import {Button, IconButton} from 'react-toolbox/lib/button';

import { reduxForm } from 'redux-form';


class SearchBar extends Component {
  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const initData = {
      "propertyValue": 100000,
      "downPayment": 20,
      "score": 500
    };

    this.props.initializeForm(initData);
  }


  render() {
    const { fields: {city ,propertyValue, downPayment, score}, handleSubmit } = this.props;
    console.log(propertyValue);
      return (
        <form onSubmit={handleSubmit(this.props.fetchDeals)} >
          <Input type='search' theme={theme} label='city' name='name' {...city} />
          <div className="row">
          <p className="text-left"> Are you confortable with an adjustable rate loan?</p>
          <RadioGroup name='comic' theme={theme}>
            <RadioButton label='Yes' value='yes' className="col-md-2" theme={theme}/>
            <RadioButton label='No' value='no' className="col-md-2" theme={theme}/>
            <RadioButton label='Not Sure' value='notsure' className="col-md-2" theme={theme}/>
          </RadioGroup>
        </div>
          <Input type='number' theme={theme} icon='$' label='What are you expecting to pay for this property?'  {...propertyValue}/>
          <Input type='number' theme={theme} icon='%' label='How much are you willing to put down on a down payment?'  {...downPayment} />
          <Input type='number' theme={theme} icon=' ' label='Whats your credit score?' value="500" {...score} />
          <Button label='Search Best Deals' raised primary />
        </form>
      );
  }
}

function validate(values){
  const error = {};

  if(!values.city) {
      error.city = 'Please, type a city Name';
  }



  return error;
}

export default reduxForm({
  form: 'SearchForm',
  fields: ['city', 'propertyValue', 'downPayment', 'score'],
  validate
}, null,{fetchDeals})(SearchBar);
