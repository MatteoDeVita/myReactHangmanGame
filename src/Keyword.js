import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Keyword extends Component {


    generateAlphabetArray() {
        const alphabet = []
        for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++)
            alphabet.push(String.fromCharCode(i))
        return alphabet
    }

    getKeyword() {
        const alphabet = this.generateAlphabetArray()        
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