import React, { Component } from 'react';
import PropTypes from 'prop-types'
import RandomWord from './RandomWord'
import KeyWord from './Keyword'
import randomWords from 'random-words'
import { withStyles } from '@material-ui/styles';
import RetrySection from './RetrySection'

const styles = {
    root: {

    },

    mainUserInterface: {
        display: 'inline-block',
        marginLeft: '32%'
    }
}

class App extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
        this.handleKeyboardOnClick = this.handleKeyboardOnClick.bind(this)
        this.handleRetryButtonOnClick = this.handleRetryButtonOnClick.bind(this)
        const word = randomWords(1).toString()
        console.log("word : ", word) ///TODO : Remove this console.log
        this.state = {
            word: word,
            discoveredWord: word.split('').map(() => '_').join(''),
            win: false
        }
    }

    handleRetryButtonOnClick() {
        const word = randomWords(1).toString()
        this.setState(
            {
                word: word,
                discoveredWord: word.split('').map(() => '_').join(''),
                win: false
            }
        )
        console.log("word : ", word) ///TODO : Remove this console.log
    }

    handleKeyboardOnClick(letter) {
        const { discoveredWord, word, win } = this.state
        let newDiscoveredWord = discoveredWord
        letter = letter.toLowerCase()
        if (word.includes(letter)) {
            newDiscoveredWord = word.split('').map((wordLetter, wordIndex) => {
                if (discoveredWord[wordIndex] === '_' && wordLetter === letter) {
                    return letter
                }
                else if (discoveredWord[wordIndex] !== '_')
                    return (discoveredWord[wordIndex])
                return ('_')
            }).join('')
        }        
        this.setState({
            currentLetter: letter,
            discoveredWord: newDiscoveredWord,
            win: newDiscoveredWord === word
        },
        () => {
            this.win = newDiscoveredWord === word            
        })        
    }

    render() {
        const { classes } = this.props
        const { discoveredWord, win } = this.state
        return (
            <div className={classes.mainUserInterface}>
                <RandomWord
                    discoveredWord={discoveredWord}
                />
                <KeyWord
                    handleKeyboardOnClick={this.handleKeyboardOnClick}
                />
                {win &&
                    <RetrySection
                    handleRetryButtonOnClick={this.handleRetryButtonOnClick}
                    />
                }
            </div>
        )
    }
}

export default withStyles(styles)(App)
