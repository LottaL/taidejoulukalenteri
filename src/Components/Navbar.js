import React, { Component } from 'react';

import About from './About';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: false
        }
    }

    toggleAbout = () => {
        this.setState( {about: !this.state.about} )
    }

    render() {
        return (
            <div>
                <h2>{this.props.en ? 
                    "The Art Advent calendar 2019" 
                    : "Taidejoulukalenteri 2019"}</h2>
                <button onClick={this.toggleAbout}>
                    {this.props.en ? "What is this?" : "Mistä on kyse?"}</button>
                <button onClick={this.props.toggleLang}>
                    {this.props.en ? "FI" : "EN"}
                </button>
        {this.state.about && <About en={this.props.en} toggleAbout={this.toggleAbout}/>}
            </div>
        )
    }
}