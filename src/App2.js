import React, { Component }  from 'react';
import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, {FAKE_HOF} from './HallOfFame.tsx'
import HighScoreInput from './HighScoreInput'
import shuffle from 'lodash.shuffle'

import './App.css'


const SIDE = 3
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const VISUAL_PAUSE_MSECS = 750

class App2 extends Component {
  state = {
    cards : this.generateCards(),
    currentPair : [],
    guesses : 0,
    hallOfFame : null,
    matchedCardIndices: [],
  }

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    //console.log(result)
    return shuffle(result)
  }

  getFeedbackForCard(index) { // cacher les cartes et comparer
    const { currentPair, matchedCardIndices } = this.state
    const indexMatched = matchedCardIndices.includes(index)
  
    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }
  
    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }
  
    return indexMatched ? 'visible' : 'hidden'
  }

  handleNewPairClosedBy(index) {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state

    const newPair = [currentPair[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses })
    if (matched) {
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
      //rappel: [...tab, ...newtab] operator spread cree un nouveau tab
      // et injecte les même valeurs + les nouvelles valeurs mod 
    }
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
  }

  // Arrow fx for binding
  handleCardClick = index => {
    const { currentPair } = this.state

    if (currentPair.length === 2) {
      return
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] })
      return
    }

    this.handleNewPairClosedBy(index)
  }

  displayHallOfFame = (hallOfFame) => {
    this.setState({hallOfFame})
  }
  
  render() {
    const {cards, guesses, hallOfFame, matchedCardIndices}= this.state;
    const won = this.state.matchedCardIndices.length > 2 ? true : false;
    console.log(won);
    return (
      <div className="memory">
        <GuessCount guesses={this.state.guesses} />
        {cards.map((card,index)=>(
          <Card
            card={card}
            feedback={this.getFeedbackForCard(index)}
            index={index}
            key={index}
            onClick={this.handleCardClick}
          />
        ))}
      {won && 
        (hallOfFame ? (
          <HallOfFame entries={hallOfFame}/>
        ): (
          <HighScoreInput 
          guesses={this.state.guesses}
          onStored={this.displayHallOfFame}/>
        ))
      }
      </div>
    )
  }
}
export default App2;



