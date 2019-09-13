import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';

export default class RetrySection extends Component {
    
    static propTypes = {
        handleRetryButtonOnClick: PropTypes.func.isRequired,
        isGameWon: PropTypes.bool.isRequired,
        word: PropTypes.string
    }
    
    render() {
        const { handleRetryButtonOnClick, isGameWon, word } = this.props
        return(
            <Fragment>
                <div>{ isGameWon ? 'Congratulation !' : `So sad ! The word was ${word}`}</div>
                <Button onClick={handleRetryButtonOnClick}>
                    Retry
                </Button>
            </Fragment>
        )
    }
}