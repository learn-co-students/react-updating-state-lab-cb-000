// Code DigitalClicker Component Here
// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.num = 0
    this.state={
      timesClicked: this.num
    }
  }

  handleClick = (event)=>{
    this.setState({timesClicked: this.num+=1})
  }

  render(){
    return(
      <div>
        <p> Ive been clicked {this.state.timesClicked} times </p>
        <button onClick = {this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
