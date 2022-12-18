import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({transactions}) => {
    return <table className={css.transactionHistory} key="transactionHistory">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
        {transactions.map( item =>
      <tr key={item.id} className={css.tableRow}>
        <td>{editType(item.type)}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
              )}
    </tbody>
  </table>
}

function editType (type) { 
    const editName = type.split('');
    editName[0] = editName[0].toUpperCase();
    return editName.join('')
}

TransactionHistory.propTypes = {
transactions : PropTypes.array.isRequired,
item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired, 
})
}
editType.propTypes = PropTypes.func