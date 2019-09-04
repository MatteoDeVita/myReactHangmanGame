import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from '@material-ui/core/';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {

    },
    keyboad: {
        // backgroundColor: 'rgba(100, 100, 100, 0.5)'
        flexDirection: 'row'
    },
    key: {
        // backgroundColor: 'rga(103, 100, 100, 0.7)',
        backgroundColor: 'rgba(100, 100, 100, 0.85)',
        color: 'white'
    },
    keyboadLine2: {
        marginTop: '20'
    }
}
class Keyword extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    }

    generateAlphabetArray() {
        const alphabet = []
        for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++)
            alphabet.push(String.fromCharCode(i))
        return alphabet
    }

    getKeyword() {
        const keyworkLettersLine1 = "AZERTYUIOP".split('')
        const keyworkLettersLine2 = "QSDFGHJKLM".split('')
        const keyworkLettersLine3 = "WXCVBN".split('')
        const { classes } = this.props
        return (
            <div className={classes.keyboad}>
                <ButtonGroup size="large">
                    {keyworkLettersLine1.map((letter) => (
                       <Button className={classes.key} onClick={() => {console.log(letter)}} >{letter}</Button> 
                    ))}
                </ButtonGroup>
                <ButtonGroup size="large" className={classes.keyboadLine2}>
                    {keyworkLettersLine2.map((letter) => (
                       <Button className={classes.key} onClick={() => {console.log(letter)}}>{letter}</Button> 
                    ))}
                </ButtonGroup>
                <ButtonGroup size="large">
                    {keyworkLettersLine3.map((letter) => (
                       <Button className={classes.key} onClick={() => {console.log(letter)}}>{letter}</Button> 
                    ))}
                </ButtonGroup>
                    
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

export default withStyles(styles)(Keyword)