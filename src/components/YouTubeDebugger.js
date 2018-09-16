import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      js {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
    } // state
  } // constructor

  handleChangeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  handleChangeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      },
    });
  }

  render() {
    const bitrate = this.state.js.settings.bitrate;
    const resolution = this.state.js.settings.video.resolution;

    return (
      <div>
        <button className="bitrate" onClick={handleChangeBitrate}>
          Bitrate: {bitrate}
        </button>
        <button className="Resolution" onClick={handleChangeResolution}>
          Resolution: {resolution}
        </button>
      </div>
    )
  }

}

export default YouTubeDebugger;
