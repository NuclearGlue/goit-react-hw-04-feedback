import React, { Component } from 'react';
import Section from './Section.js';
import FeedbackOptions from './FeedbackOptions.js';
import Statistics from './Statistics.js';
import Notification from './Notification.js';
class FeedbackComponent extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  addFeedback = type => {
    this.setState(state => ({
      [type]: state[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prev, curr) => prev + curr, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedbackComponent;
