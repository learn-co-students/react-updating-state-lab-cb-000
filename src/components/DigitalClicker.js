import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    var clicks = 1 + this.state.timesClicked
    this.setState({
      timesClicked: clicks
    })
  }

  render() {
    return (
      <button onClick={handleClick}>Times clicked: {timesClicked}</button>
    )
  }
}

export default DigitalClicker;
