import React, {Component} from 'react'
import PropTypes from 'prop-types'
import randomWords from 'random-words'

export default class RandomWord extends Component {

    state = {
        randomWord: randomWords(1).toString()
    }

    render() {
        const { randomWord } = this.state
        console.log(randomWord)
        return (
            randomWord
        )
    }
}