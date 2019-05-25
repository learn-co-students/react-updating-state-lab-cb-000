// Code YouTubeDebugger Component Here
import React from 'react';
 
export default class YouTubeDebugger extends React.Component {

  constructor() {
    super();
 
    // Define the initial state:
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
 
  handleChangeBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  handleChangeResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });
  }

  render() {
    return (
      <div>
        <button 
          className="bitrate" 
          onClick={this.handleChangeBitrate}
        >
          Change bitrate ({this.state.settings.bitrate})
        </button>
        <button 
          className="resolution" 
          onClick={this.handleChangeResolution}
        >
          Change resolution ({this.state.settings.video.resolution})
        </button>
      </div>
    );
  }
}
