import PropTypes from 'prop-types';
import GetStatisticsItem from './StatisticsItem';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className={s.statistics}>
        <h2 className={`title${title ? 'title--active' : ''}`}>{title}</h2>

        <ul className={s.statsList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <GetStatisticsItem
                key={id}
                label={label}
                percentage={percentage}
              />
            );
          })}
          ;
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};

export default Statistics;
