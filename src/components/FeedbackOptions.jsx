import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/FeedbackOptions.module.css'


const FeedbackOptions = ({options, onLeaveFeedback}) => (    
    <div className={css.feedbackControls}>
        {options.map(({name, setter}) => (
            <button className={css.feedbacButton} type="button" key={name} onClick={() => onLeaveFeedback(setter)}>{name}</button>
            ))}        
    </div>
)

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            setter: PropTypes.func.isRequired
        })).isRequired,
};
