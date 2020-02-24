import React, { Component } from 'react';
import './App.css';
import PlayerCard from './playerCards'
import axios from 'axios';
import { DarkButton } from './hooks/darkButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  getPlayers = () => {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: res.data
        })
      }).catch(err => {
        console.log(err)
      })
  }
  
  componentDidMount() {
    this.getPlayers()
  }

  render() {
    console.log(this.state.players)
    return ( 
      <div className="container">
        <h1 data-testId='header'>Women's World Cup</h1>
        <DarkButton />
        <div className="player-container">
          {this.state.players.map((list, index) => (
            <PlayerCard
              key={index}
              name={list.name}
              country={list.country}
              searches={list.searches}
            />
          ))}
        </div>
      </div>
    )
  }
 
}

export default App;
