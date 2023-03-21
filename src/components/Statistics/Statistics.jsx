// import data from 'data';
import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={css.item}>
            <StatisticsItem key={id} label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
