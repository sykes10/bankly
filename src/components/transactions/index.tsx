import { useQuery } from "react-query";
import * as Tabs from "@radix-ui/react-tabs";
import { isIncome, isExpense } from "../../lib/transactions";
import { Loading } from '../loading'
import type { Transaction as TransactionType } from "../../../types";
import { TransactionTable } from "../transactionsTable";
import "./index.css";

export const TransactionHistory = () => {
  const { data: transactions, isLoading, isError } = useQuery('transactions', () => fetch('/api/transactions').then(response => response.json()))
  const incomeTranstations: TransactionType[] = transactions?.filter(isIncome)
  const expenseTranstations: TransactionType[] = transactions?.filter(isExpense)

  return (
    <>
      <h1 className="align-left">Transaction History</h1>
      <Tabs.Root defaultValue="expenses" className="flow">
        <Tabs.List className="tabs__list" aria-label="Filter your transactions">
          <Tabs.Trigger value="expenses">Expenses</Tabs.Trigger>
          <Tabs.Trigger value="income">Income</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="expenses">
          {isLoading && <Loading />}
          {isError && <p>Error</p>}
          {expenseTranstations && <TransactionTable transactions={expenseTranstations} ariaLabel="Expenses" />}
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="income">
          {isLoading && <Loading />}
          {isError && <p>Error</p>}
          {incomeTranstations && <TransactionTable transactions={incomeTranstations} ariaLabel="Income" />}
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};
