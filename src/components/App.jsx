
import React, { Component } from 'react'
import FeedbackOptions from 'components/FeedbackOptions'
import Statistics from 'components/Statistics'
import Notification from 'components/Notification'
import Section from 'components/Section'
import css from 'components/App.module.css'


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

handleButton = (option) => {    
    this.setState(prevState => ({
    [option]: prevState[option] + 1,
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
      <div className={css.container}>
        <Section title="Please leave feedback"> 
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleButton} />
        </Section>
        <Section title="Statistics">        
          {total === 0 ? (<Notification message="There is no feedback"></Notification>) :
          (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>)}      
        </Section>
      </div>
    );
  }
}

export default App;