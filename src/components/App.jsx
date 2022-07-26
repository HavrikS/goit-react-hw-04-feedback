import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import transactions from 'components/incomingData/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
