import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const [statData, setStatData] = useState(INITIAL_STATE);

  const { good, neutral, bad } = statData;

  const countFeedback = event => {
    const {
      target: { name },
    } = event;

    return setStatData(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(statData);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = statData;
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };
  const btnNames = Object.keys(statData);
  return (
    <div>
      <Section title={'Please leave Feedback'}>
        <FeedbackOptions options={btnNames} onLeaveFeedback={countFeedback} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
