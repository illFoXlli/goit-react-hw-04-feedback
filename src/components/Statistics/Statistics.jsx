import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={s.ulItem}>
        <li className={s.pItem}>
          Good:
          <span className={s.spanItem}>{good}</span>
        </li>
        <li className={s.pItem}>
          Neutral:
          <span className={s.spanItem}>{neutral}</span>
        </li>
        <li className={s.pItem}>
          Bad:
          <span className={s.spanItem}>{bad}</span>
        </li>
        <li className={s.pItem}>
          Total:
          <span className={s.spanItem}>{total}</span>
        </li>
        <li className={s.pItem}>
          Positive feedback:
          <span className={s.spanItem}>
            {positivePercentage}%
          </span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
