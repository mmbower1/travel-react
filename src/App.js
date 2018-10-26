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

  buttonChoice = (event)=> {

    const choice = parseInt(event.target.getAttribute('index'));
    console.log(choice);
    console.log(this.state.travels)
    const checkIfInArray = this.state.travels.indexOf(choice);

    var checkIfTopScore = 0;

    const scoreVal = this.state.score;
    const topScoreVal = this.state.topScore;

    // Check if you're currently tied for high score
    if (topScoreVal === scoreVal) {
      checkIfTopScore = 1;
    } else {
      checkIfTopScore = 0;
    };

    if (checkIfInArray > -1) {
      // If you pick incorrectly
      this.setState({ score: 0 , picked: [] , css: "incorrectGuess" , text: "Duplicate! Try again." });
    } else {
      // If you pick correctly
      this.setState({ picked: [...this.state.picked, `${choice}`] , score: this.state.score + 1 , css: "correctGuess", 
      text: "Good pick!" });
      
      this.setState({ topScore: this.state.topScore + checkIfTopScore });
    }
    
    this.shuffle(this.state.travels);
    
  };

  shuffle = (array) => {
    console.log("here");
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
    console.log(array);
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
