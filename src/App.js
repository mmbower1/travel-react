import React, { Component } from 'react';
// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import TravelCard from "./components/TravelCard";
import Travels from "./travels.json";
import './App.css';

class App extends Component {

  //setting this.state.friends to the travels json array
  state = {
    css: "start",
    text: "Click a button to start",
    score: 0,
    topScore: 0,
    picked: [],
    travels: Travels
  };

  buttonChoice = (event) => {

    const choice = parseInt(event.target.getAttribute('index'));
    console.log(choice);
    console.log(this.state.picked);

    if (this.state.picked.indexOf(choice) >= 0) {
      console.log("wrong");
      // If you pick incorrectly
      this.setState({ 
        score: 0 , 
        picked: [], 
        css: "incorrectGuess" , 
        text: "Duplicate! Try again." 
      });

    } else {
      console.log("correct");

      // If you pick correctly
      this.setState({ 
        picked: [...this.state.picked, choice],
        score: this.state.score + 1 , 
        css: "correctGuess", 
        text: "Good pick!"
      });
      
    }
    
    // Check if you're currently tied for high score
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score + 1});
    };

    this.shuffle(this.state.travels);
    
  };

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

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

  render() {
    console.log(this.state)
    return (
      <div className="App" >
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Wrapper >
          <h1 className="title">Travel List</h1>
          {this.state.travels.map(travel => (
            <TravelCard 
              key={travel.id}
              name={travel.name}
              image={travel.image}
              buttonChoice={this.buttonChoice}
              index={travel.id}
            />
          ))}
        </Wrapper>
      </div>
    );
  };
};

export default App;
