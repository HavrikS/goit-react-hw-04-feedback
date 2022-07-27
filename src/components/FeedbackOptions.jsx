import React from 'react'
import PropTypes from 'prop-types'


const FeedbackOptions = ({onHandleButtonGood, onHandleButtonNeutral, onHandleButtonBad}) => (
    <div className='feedbackControls'>
        <button type="button" onClick={onHandleButtonGood}>Good</button>
        <button type="button" onClick={onHandleButtonNeutral}>Neutral</button>
        <button type="button" onClick={onHandleButtonBad}>Bad</button>
    </div>
)

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    onHandleButtonGood: PropTypes.func.isRequired,
    onHandleButtonNeutral: PropTypes.func.isRequired,
    onHandleButtonBad: PropTypes.func.isRequired,
};