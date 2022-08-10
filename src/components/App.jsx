
import { useState } from 'react'
import FeedbackOptions from 'components/FeedbackOptions'
import Statistics from 'components/Statistics'
import Notification from 'components/Notification'
import Section from 'components/Section'
import css from 'components/App.module.css'


export default function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = [
    { name: "good", setter: setGood },
    { name: "neutral", setter: setNeutral },
    { name: "bad", setter: setBad }];
  
  const handleButton = (setter) => {    
    setter(prevState => prevState + 1)
  };

  const countTotalFeedback = () => {    
    return  good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {    
    return Math.ceil((good/(good + neutral + bad)*100))
  }


    
    const total = countTotalFeedback()
    const positivePercentage = countPositiveFeedbackPercentage()
    
    return (
      <div className={css.container}>
        <Section title="Please leave feedback"> 
          <FeedbackOptions options={options} onLeaveFeedback={handleButton} />
        </Section>
        <Section title="Statistics">        
          {total === 0 ? (<Notification message="There is no feedback"></Notification>) :
          (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>)}      
        </Section>
      </div>
    );
  }

