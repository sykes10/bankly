import type { Transaction as TransactionType } from "../../../types";
import { Avatar } from "./avatar";
import { convertCurrencyToLocaleString, convertDateToLocaleString } from '../../lib/conversions';
import './index.css';

type TransactionProps = {
  transaction: TransactionType;
};

type TransactionTableProps = {
    transactions: TransactionType[],
    ariaLabel: string
}


const Transaction = ({ transaction }: TransactionProps) => (
  <tr>
    <td>
      <div className="transaction-detail">
        <Avatar name={transaction.description} />
        <div className="transaction-description">
          {transaction.description}
          <div className="transaction-category">{transaction.category}</div>
        </div>
      </div>
    </td>
    <td>
      <div>{convertDateToLocaleString(transaction.date)}</div>
    </td>
    <td className="transaction-amount">
      <div>{convertCurrencyToLocaleString(transaction.amount.value, transaction.amount.currency_iso)}</div>
    </td>
  </tr>
);

export const TransactionTable = ({ transactions = [], ariaLabel }: TransactionTableProps) => {
    return (
        <table aria-label={ariaLabel}>
            <thead className="table-head">
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <Transaction transaction={transaction} key={transaction.id} />
                ))}
            </tbody>
        </table>
    );
};

