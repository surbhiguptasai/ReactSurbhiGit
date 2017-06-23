import React from 'react';
export default class GuessList extends React.Component{
 constructor(props) {
    super(props);
    this.state = { pastGuesses:[]};

    }
    addEntryToArray(entry){
let pastGuess=this.state.pastGuesses;
pastGuess.push(entry);
this.setState({pastGuesses: pastGuess});
    }
  render() {
  	 const guesses = this.state.pastGuesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));
    return <ul id="guessList" className="guessBox clearfix">
    {guesses}
      </ul>;
  }
};
