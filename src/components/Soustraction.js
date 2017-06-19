import React, { Component } from 'react';
import Form from './Form';

class Addition extends Component {
  constructor(){
    super();
    this.state = {
      result: '',
    };
    this._calculate = this._calculate.bind(this);
  }
  _calculate(a, b){
    let result = parseInt(a,10) - parseInt(b,10);
    this.setState({
      result: result,
    });
  }
  render(){
    //console.log(this.state)
    return(
      <div>
        <Form type="soustraction" sendForm={this._calculate}/>
        <div>
          {this.state.result}
        </div>
      </div>
    );
  }
};

export default Addition;
