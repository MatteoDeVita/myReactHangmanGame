import React, { Component } from 'react';
import PropTypes from 'prop-types'
import RandomWord from './RandomWord'
import KeyWord from './Keyword'
import randomWords from 'random-words'
import { withStyles } from '@material-ui/styles';


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
        const word = randomWords(1).toString()
        console.log("word : ", word) ///TODO : Remove this console.log
        this.state = {
            word: word,
            discoveredWord: word.split('').map(() => '_').join('')
        }
    }

    handleKeyboardOnClick(letter) {
        const { discoveredWord, word } = this.state
        let newDiscoveredWord = discoveredWord
        letter = letter.toLowerCase()
        if (word.includes(letter)) {
            newDiscoveredWord = word.split('').map((wordLetter, wordIndex) => {
                if (discoveredWord[wordIndex] === '_' && wordLetter === letter) {
                    return letter
                }
                else if (discoveredWord[wordIndex] !=='_')
                    return (discoveredWord[wordIndex])
                return ('_')
            }).join('')
        }
        this.setState({
            currentLetter: letter,
            discoveredWord: newDiscoveredWord
        })
    }

    render() {
        const { classes } = this.props
        const { discoveredWord } = this.state
        return (
            <div className={classes.mainUserInterface}>
                <RandomWord
                    discoveredWord={discoveredWord}
                />
                <KeyWord
                    handleKeyboardOnClick={this.handleKeyboardOnClick}
                />
            </div>
        )
    }
}

export default withStyles(styles)(App)
