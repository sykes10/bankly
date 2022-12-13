import * as Tabs from "@radix-ui/react-tabs";
import { useQuery } from "react-query";
import type { Transaction as TransactionType, TransactionProps } from "../../../types";
import "./index.css";
import { Transaction } from "./item";

const isExpense = (transaction: TransactionType) =>
  transaction.amount.value < 0;
const isIncome = (transaction: TransactionType) => transaction.amount.value > 0;

const Expenses = ({ transactions = [] }: TransactionProps) => {
  return (
    <table aria-label="Expenses">
      <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.filter(isExpense).map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

const Income = ({ transactions = [] }: TransactionProps) => {
  return (
    <table aria-label="Income">
      <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.filter(isIncome).map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export const TransactionHistory = () => {
  const { data: transactions, isLoading, error } = useQuery('transactions', () => fetch('/api/transactions').then(response => response.json()))

  return (
    <>
      <h1 className="align-left">Transaction History</h1>
      <Tabs.Root defaultValue="expenses" className="flow">
        <Tabs.List className="tabs__list" aria-label="Filter your transactions">
          <Tabs.Trigger value="expenses">Expenses</Tabs.Trigger>
          <Tabs.Trigger value="income">Income</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="TabsContent" value="expenses">
          <Expenses transactions={transactions} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="income">
          <Income transactions={transactions} />
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};
