import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';

export default class RetrySection extends Component {
    
    static propTypes = {
        handleRetryButtonOnClick: PropTypes.func.isRequired
    }
    
    render() {
        const { handleRetryButtonOnClick } = this.props
        return(
            <Fragment>
                <div>Congratulation !</div>
                <Button onClick={handleRetryButtonOnClick}>
                    Retry
                </Button>
            </Fragment>
        )
    }
}