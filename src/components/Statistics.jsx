import React from 'react'
import PropTypes from 'prop-types'


const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div className='statistics'>        
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>bad: {bad}</p>        
        <p>Total: {total}</p>
        <p>Positive feedback: {(good > 0 ? positivePercentage : 0)}%</p>
    </div>
)

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};