import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import TravelCard from "./components/TravelCard";
import travels from "./travels.json";
import './App.css';

class App extends Component {
  //setting this.state.friends to the travels json array
  state = {
    travels
  };

  componentDidMount = () => {
    this.setState({
      travels: travels
    });
  }

  removeTravel = id => {
    const travels = this.state.travels.filter(travel => travel.id !== id);
    //sets this.state.travels equal to new travels array
    this.setState({ travels });
  };
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

        </header> */}
        <Navbar>
          <div>
            <h1>Hi</h1>
          </div>
        </Navbar>
        <Wrapper>
          <h1 className="title">Travel List</h1>
          {this.state.travels.map(travels => (
            <TravelCard
              removeTravel={this.removeTravel}
              id={travels.id}
              name={travels.name}
              image={travels.image}
              location={travels.location}
              area={travels.area}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
