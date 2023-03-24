import PropTypes from 'prop-types';
import GetTransactionOperation from './TransactionOperation';
import { TransactionsTable, TransactionsHead, TransactionsBody} from './Transactions.styled';

const ShowTransactionHistory = ({transactions}) => {
  return (
    <TransactionsTable >
      <TransactionsHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionsHead>
      <TransactionsBody>
        {transactions && transactions.map(({ id, type, amount, currency }) => 
           (
            <GetTransactionOperation
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          )
        )}
        
      </TransactionsBody>
    </TransactionsTable>
  );
};

ShowTransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}

export default ShowTransactionHistory;