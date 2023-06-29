import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    {total === 0 ? (
      <h3>There is no feedback</h3>
    ) : (
      <div>
        <ul className={css.stList}>
          <li className={css.stItem}>
            <span className={css.stName}>Good:</span> {good}
          </li>
          <li className={css.stItem}>
            {' '}
            <span className={css.stName}> Neutral: </span>
            {neutral}
          </li>
          <li className={css.stItem}>
            {' '}
            <span className={css.stName}>Bad: </span>
            {bad}
          </li>
          <li className={css.stItem}>
            {' '}
            <span className={css.stName}>Total:</span> {total}
          </li>
          <li className={css.stItem}>
            <span className={css.stName}> Positive feedback:</span>{' '}
            {positivePercentage}%
          </li>
        </ul>
      </div>
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
