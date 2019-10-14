import React, { Components, Component } from 'react';
import './App.css';

class PlayerCard extends Component {
    // constructor() {
    //     super()
    // }
    render() {
        return (
            <div key={this.props.key} className= "players-cards">
                <h3>{this.props.name}</h3>
                <p>{this.props.country}</p>
                <p>{this.props.searches}</p>
            </div>
        )
    }
}

export default PlayerCard;