import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className="statistics__list">
      <li className="statictics__item">Good: {good}</li>
      <li className="statictics__item">Neutral: {neutral}</li>
      <li className="statictics__item">Bad: {bad}</li>
      <li className="statictics__item">Total: {total}</li>
      <li className="statictics__item">
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
