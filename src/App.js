import React, { Component } from 'react';
import posed from 'react-pose';

import English from './Components/English';
import Finnish from './Components/Finnish';
import Navbar from './Components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      english: false,
      finnish: true,
      date: null,
      month: null,
      test: false
    }
    this.setDate = this.setDate.bind(this);
    this.toggleLang = this.toggleLang.bind(this);
  }

  setDate = () => {
    let day = new Date(Date.now());
    let date = day.getDate();
    let month = day.getMonth() + 1;
    month = 12; //testing variable
    //date = 3;
    //console.log(day + ": " + date);
    this.setState( {
      date: 12,//date,
      month: month
    } )
  }

  toggleLang = () => {
    this.setState( {
      english: !this.state.english,
      finnish: !this.state.finnish,
      test: false
    } );
  }

  test = () => {
    this.setState( {test: !this.state.test} )
  }

  componentWillMount () {
    this.setDate();
  }
  
  render () {
    return (
      <React.Fragment>
        <h1>{this.state.date}.{this.state.month}.</h1>
        {this.state.month === 12 ? 
          <div>
            <Navbar 
              toggleLang={this.toggleLang} 
              fi={this.state.finnish} 
              en={this.state.english}
            />
            {this.state.english && <English date={this.state.date}/>}
            {this.state.finnish && <Finnish date={this.state.date}/>}
          </div>
          : ""
        }
      </React.Fragment>
    );
  }
}

export default App;

const Flake1 = posed.div({
  top: {
    bottom: "100vh",
    transition: {duration: 6000}
  },
  bottom: {
    bottom: 0,
    transition: {duration: 0}
  }
})

const small = {
  width: "4vw",
  height: "4vw"
}

const medium = {
  width: "10vw",
  height: "10vw"
}

const large = {
  width: "20vw",
  height: "20vw"
}