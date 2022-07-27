//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import FeedbackOptions from 'components/Feedback/FeedbackOptions'
import Statistics from 'components/Feedback/Statistics'
import Notification from 'components/Feedback/Notification'


export class Feedback extends Component {
  //static propTypes = {}

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleButtonGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
  };

  handleButtonNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  };

  handleButtonBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return  good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state
    return Math.ceil((good/(good + neutral + bad)*100))
  }


  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    return (      
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions onHandleButtonGood={this.handleButtonGood}
        onHandleButtonNeutral={this.handleButtonNeutral}
          onHandleButtonBad={this.handleButtonBad} />
        <h2>Statistics</h2>
        {total === 0 && (<Notification message="There is no feedback"></Notification>)}
        {total > 0 && (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>)}
      </div>
    );
  }
}

export default Feedback;
