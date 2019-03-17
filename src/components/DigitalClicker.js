import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    
    this.state = {
      timesClicked: 0
    }
  }
  
  updateClickCount = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }
  
  render() {
    return (
      <button onClick={this.updateClickCount}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
