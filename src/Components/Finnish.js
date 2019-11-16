import React, { Component } from 'react';

import Hatch from './Hatch';

import { finnishWords } from '../content/words';

export default class Finnish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendar: finnishWords
        };
        this.available = this.available.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }

    available = () => {
        let newlist = this.state.calendar.slice(0, this.props.date);
        console.log(newlist);
        let hatches = [];
        newlist.map((e, i) => {
            hatches.push(<Hatch number={i+1} word={e}/>)
        })
        for (let i = hatches.length; i < this.state.calendar.length; i++) {
            hatches.push(<p></p>)
        }
        console.log(this.shuffle(hatches));
        return hatches;//this.state.calendar.slice(0, this.props.date);
    }

    shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;  
    };

    /*{this.available().map((e, i) => 
                    <Hatch number={i+1} word={e}/>
                    )}*/

    render() {
        return (
            <div id="calendar" style={calendarStyle}>
                {this.available()}
            </div>
        )
    }
}

const calendarStyle = {
    display: "grid",//"flex",
    //flexWrap: "wrap",
    width: "100vw",
    height: "80vh",
    marginTop: "2vh",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr"
}