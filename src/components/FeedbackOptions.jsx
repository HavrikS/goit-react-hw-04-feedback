import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/FeedbackOptions.module.css'


const FeedbackOptions = ({options, onLeaveFeedback}) => (    
    <div className={css.feedbackControls}>
        {options.map((option) => (
            <button className={css.feedbacButton} type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
            ))}        
    </div>
)

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
};