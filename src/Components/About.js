import React, { Component } from 'react';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: "introduction in english",
            fi: "suomenkieliset ohjeet"
        }
    }

    render() {
        return (
            <div id="about">
                <button onClick={this.props.toggleAbout}>x</button>
                {this.props.en ? this.state.en : this.state.fi}
            </div>
        )
    }
}