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
    };
  }

  handleSetBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  handleSetResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p',
        }
      }
    });
  }


  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleSetBitrate}>Set bitrate</button>
        <button className="resolution" onClick={this.handleSetResolution}>Set resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
