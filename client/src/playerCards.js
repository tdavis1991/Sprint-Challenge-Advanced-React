import React from 'react';
import './App.css';

const PlayerCard = (props) => {
        return (
            <div key={props.key} className= "players-cards">
                <h3>Name: {props.name}</h3>
                <p>Country: {props.country}</p>
                <p>Searches: {props.searches}</p>
            </div>
        )
}

export default PlayerCard;