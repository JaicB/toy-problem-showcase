import React, { Component } from 'react'

class FilterObjects extends Component {
    constructor () {
        super();

        this.state = {
            players: [
                {
                    name: 'Little Timmy',
                    position: '1st Base',
                    age: 9,
                },
                {
                    name: 'Little Abe',
                    position: 'Short Stop',
                    league: 'Pee Wee',
                    age: 4,
                },
                {
                    name: 'Little Sebastian',
                    position: 'Pitcher',
                    age: 47,
                    favoritePlayer: 'Kris Bryant',
                }
            ],

            userInput: '',
            filteredPlayers: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val});
    }

    filteredPlayers(prop) {
        let players = this.state.players;
        let filteredPlayers = [];

        for ( let i = 0; i < players.length; i++) {
            if ( players[i].hasOwnProperty(prop) ) {
                filteredPlayers.push(players[i]);
            }
        }
        this.setState({ filteredPlayers: filteredPlayers });
    }
    
    render () {
        return (
            <div className="puzzleBox filterObjPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.players, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
                <button className="confirmationButton" onClick={ () => this.filteredPlayers(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPlayers, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObjects;