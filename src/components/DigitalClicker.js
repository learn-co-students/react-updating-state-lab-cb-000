import React from 'react';
 
class DigitalClicker extends React.Component {
  
  state = { timesClicked: 0 }
 
  handleClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }
 
  render() {
    return (
      <div>
        <h3>simple incrementing button</h3>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
 
export default DigitalClicker;