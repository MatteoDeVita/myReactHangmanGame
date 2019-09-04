import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Keyword extends Component {

    getKeyword() {
        const alphabet = []
        alphabet[0] = 'a'
        for (let i = 1; i < 25; i++)
            alphabet[i] = alphabet[i-1] + 1 
            console.log(alphabet)
        return (
            <div>
                {alphabet.map((letter) => (
                    letter
                ))}
            </div>
        )
    }

    render() {
        const keyword = this.getKeyword()
        return (
            keyword
        )
    }
}