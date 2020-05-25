import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

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

    clickBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state))
    }

    clickResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state))
    }

    render() {
        return(
            <div>
            <button className="bitrate" onClick={this.clickBitrate}>Bitrate</button>
            <button className="resolution" onClick={this.clickResolution}>Resolution</button>
            </div>
        );
    }
}