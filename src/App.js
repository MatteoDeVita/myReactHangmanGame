import React, { Component } from 'react';
import PropTypes from 'prop-types'
import RandomWord from './RandomWord'
import KeyWord from './Keyword'
import randomWords from 'random-words'
import { withStyles } from '@material-ui/styles';
import RetrySection from './RetrySection'
import LiveCounter from './LiveCounter'

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
            win: false,
            lost: false,
            lives: 15
        }
    }

    handleRetryButtonOnClick() {
        const word = randomWords(1).toString()
        this.setState(
            {
                word: word,
                discoveredWord: word.split('').map(() => '_').join(''),
                win: false,
                lost: false,
                lives: 15
            }
        )
        console.log("word : ", word) ///TODO : Remove this console.log
    }

    handleKeyboardOnClick(letter) {
        const { discoveredWord, word } = this.state
        let { lives } = this.state
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
        else {
            lives--
        }
        this.setState({
            currentLetter: letter,
            discoveredWord: newDiscoveredWord,
            win: newDiscoveredWord === word,
            lives,
            lost: lives < 0
        },
        () => {
            this.win = newDiscoveredWord === word
        })
    }

    render() {
        const { classes } = this.props
        const { discoveredWord, win, lost, lives, word } = this.state
        return (
            <div className={classes.mainUserInterface}>
                <LiveCounter lives={lives}/>
                <RandomWord
                    discoveredWord={discoveredWord}
                />                
                {(win || lost) ?
                    <RetrySection
                        handleRetryButtonOnClick={this.handleRetryButtonOnClick}
                        isGameWon={win}
                        word={lost && word}
                    />                    
                    :
                    <KeyWord
                    handleKeyboardOnClick={this.handleKeyboardOnClick}
                    discoveredWord={discoveredWord}
                    />
                }
            </div>
        )
    }
}

export default withStyles(styles)(App)
