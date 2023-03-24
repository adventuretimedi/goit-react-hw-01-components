import PropTypes from 'prop-types';

const GetTransactionOperation = ({ type, amount, currency }) => {
  return (
    <tr>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
};

GetTransactionOperation.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default GetTransactionOperation;