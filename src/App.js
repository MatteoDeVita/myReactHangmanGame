import React, { Component } from 'react';
import RandomWord from './RandomWord'
import KeyWord from './Keyword'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.handleKeyboardOnClick = this.handleKeyboardOnClick.bind(this)
    }

    state = {
        currentLetter: null
    }

    handleKeyboardOnClick(letter) {
        this.setState({currentLetter: letter})
        console.log(this.state)
    }

    render() {
        return (
            <div className="App">
                <RandomWord/>
                <KeyWord
                    handleKeyboardOnClick={this.handleKeyboardOnClick}
                />
            </div>
        )
    }
}
