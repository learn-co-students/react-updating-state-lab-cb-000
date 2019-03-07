import React from 'react' ;

export default class DigitalClicker extends React.Component {

  constructor() {
    super() ;
     this.state = {
       timesClicked: 0
     }
     this.clickCount = this.clickCount.bind(this)
  }
  clickCount = () => {
    var plusOne = this.state.timesClicked + 1 ;
    this.setState ({
      timesClicked: plusOne
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.clickCount} >{this.state.timesClicked}</button>
      </div>
    )
  }
}
