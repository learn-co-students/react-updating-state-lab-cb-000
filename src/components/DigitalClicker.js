// Code DigitalClicker Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }
  
  handleClick = () => {
    var newClick = this.state.timesClicked + 1
    this.setState({
      timesClicked: newClick
    })
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      );
  }
}