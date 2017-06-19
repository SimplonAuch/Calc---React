import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class Form  extends Component {
  constructor(){
    super();
    this.state = {
      first_number: '',
      second_number: '',
    }
  }
  render(){
    const {type, sendForm} = this.props;
    const {first_number, second_number} = this.state;
    return (
      <form onSubmit={
        (e) => {
          e.preventDefault();
          sendForm(first_number, second_number);
        }
      }>
        <Input value={first_number} action={(e) => { this.setState({first_number: e.target.value})}}/>
        <Input value={second_number}action={(e) => { this.setState({second_number: e.target.value})}}/>
        <Button name={type}/>
      </form>
    )
  }
}


export default Form;
