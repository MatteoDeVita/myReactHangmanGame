import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Typography, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import { alphabet } from './constants'

const styles = {
    root: {

    },
    word: {
        textAlign: 'center',
        marginBottom: '50px',
    }
}

class RandomWord extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        lettersFound: PropTypes.arrayOf(alphabet).isRequired,
        discoveredWord: PropTypes.string.isRequired
    }

    render() {
        const { classes, discoveredWord } = this.props
        return (
            <Typography className={classes.word} variant="h2" >
                <Box letterSpacing={10}>
                    {discoveredWord}
                </Box>
            </Typography>
        )
    }
}

export default withStyles(styles)(RandomWord)
