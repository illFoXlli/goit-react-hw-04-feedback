import { useState } from 'react';
import Section from './Section';
import FeedbackButtons from './FeedbackButtons';
import Statistics from './Statistics';
import Notification from './Notification';



export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const options=['good', 'neutral', 'bad'];

  const onCountFeedback = e => {
    const item = e.currentTarget.name;
    switch (item) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const percentFeedback = () => {
    const total = totalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackButtons
          options={options}
          onBtnClick={onCountFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback() < 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={percentFeedback()}
          />
        )}
      </Section>
    </>
  );
}
