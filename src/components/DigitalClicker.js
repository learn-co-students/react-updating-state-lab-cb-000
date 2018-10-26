import React from 'react';

export default class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }

  clicker = () => {
    this.setState({
      timesClicked: this.state.timesClicked += 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.clicker}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
