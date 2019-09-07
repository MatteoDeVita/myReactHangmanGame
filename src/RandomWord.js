import React, {Component} from 'react'
import PropTypes from 'prop-types'
import randomWords from 'random-words'
import { withStyles } from '@material-ui/styles';
import { alphabet } from './constants'

const styles = {
    root: {

    },
}

class RandomWord extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        lettersFound: PropTypes.arrayOf(alphabet).isRequired
    }

    state = {
        word: randomWords(1).toString(),
    }

    componentDidMount() {
        const { word } = this.state

        this.state.discoveredWord = word.split('').map(() => '_').join('')
        this.setState(this.state)
    }

    render() {
        const { word, discoveredWord } = this.state
        console.log()
        return (
            <div>
                {word}
                {discoveredWord}
            </div>
        )
    }
}

export default withStyles(styles)(RandomWord)
