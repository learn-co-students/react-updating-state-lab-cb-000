import React from 'react';

class YouTubeDebugger extends React.Component {
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
    }
  }
  
  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }
  
  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  }
  
  /*
    Or could use Object.assign:
    handleChangeResolution = () => {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, {
            resolution: '720p'
          })
        }),
      });
    }
  */
  
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>Change bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Change resolution</button>
        <p>Resolution: {this.state.settings.video.resolution} | Bitrate: {this.state.settings.bitrate}</p>
      </div>
    )
  }
}

export default YouTubeDebugger;