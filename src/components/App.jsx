import { Component } from 'react';
import Section from './Section';
import FeedbackButtons from './FeedbackButtons';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbacks(state) {
    return Object.keys(state);
  }
  onBtnClick = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  totalFeedback = () => {
    return (
      this.state.good + this.state.neutral + this.state.bad
    );
  };
  percentFeedback = () => {
    const total = this.totalFeedback();
    return total
      ? Math.round((this.state.good / total) * 100)
      : 0;
  };

  getGood = () => this.state.good;
  getNeutral = () => this.state.neutral;
  getBad = () => this.state.bad;

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackButtons
            btnOptions={this.feedbacks(this.state)}
            onBtnClick={this.onBtnClick}
          />
        </Section>
        <Section title="Statistics">
          {!this.totalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.getGood()}
              neutral={this.getNeutral()}
              bad={this.getBad()}
              total={this.totalFeedback()}
              positivePercentage={this.percentFeedback()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
