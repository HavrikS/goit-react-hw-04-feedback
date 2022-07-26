import React from 'react'


const FeedbackOptions = ({onHandleButtonGood, onHandleButtonNeutral, onHandleButtonBad}) => (
    <div className='feedbackControls'>
        <button type="button" onClick={onHandleButtonGood}>Good</button>
        <button type="button" onClick={onHandleButtonNeutral}>Neutral</button>
        <button type="button" onClick={onHandleButtonBad}>Bad</button>
    </div>
)

export default FeedbackOptions;