import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
    },    
    redLives: {
        color: 'red'
    }
}

class LiveCounter extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        lives: PropTypes.number.isRequired
    }
    
    render() {
        const { classes, lives } = this.props
        return (
            <div className={classes.root}>
                {'lives : '}
                {lives > 3 ?                 
                    <div>{lives}</div>
                    :
                    <div className={classes.redLives}>{lives > 0 ? lives : 0}</div>
                }
            </div>
        )
    }
}

export default withStyles(styles)(LiveCounter)
