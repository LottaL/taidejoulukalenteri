import React, { Component } from 'react';

export default class Hatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.toggleHatch = this.toggleHatch.bind(this);
    }

    toggleHatch = () => {
        this.setState( {
            open: !this.state.open
        } )
    }

    render() {
        return (
            <div className="hatch" onClick={this.toggleHatch} style={hatchStyle}>
                {this.state.open ? this.props.word : this.props.number}
            </div>
        )
    }
}

const hatchStyle={
    width: "16vw",
    height: "8vh",
    color: "white",
    fontSize: "6vh",
    textAlign: "center",
    paddingTop: "2vh",
    wordWrap: "break-word"
}//make media query for 425px and below