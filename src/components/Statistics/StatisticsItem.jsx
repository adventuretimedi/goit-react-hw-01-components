import PropTypes from 'prop-types';

const GetStatisticsItem = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

GetStatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default GetStatisticsItem;