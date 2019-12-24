// Code YouTubeDebugger Component Here
import React from "react";

export default class YouTubeDebugger extends React.Component{
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleClickBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  handleClickResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: '720p'
        }
      })
    })
  }

  render(){
    return (
      <div>
        <button className='bitrate' onClick={this.handleClickBitrate}>Change bitrate</button>
        <button className='resolution' onClick={this.handleClickResolution}>Change resolution</button>
      </div>
    )
  }
}
