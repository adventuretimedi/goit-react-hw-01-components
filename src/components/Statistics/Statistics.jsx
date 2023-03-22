import PropTypes from 'prop-types';
import GetStatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className="statistics">
        <h2 className={`title${title ? 'title--active' : ''}`}>{title}</h2>

        <ul className="stats-list">
          {stats.map(({ id, label, percentage }) => {
            return (
                <GetStatisticsItem
                    key={id}
                    label={label}
                    percentage={percentage}
                />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
    stats: PropTypes.string.isRequired,
    title: PropTypes.string,
}

export default Statistics;
