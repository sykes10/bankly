import type { Transaction } from "../../types";

export const isExpense = (transaction: Transaction): boolean =>
  transaction.amount.value < 0;
export const isIncome = (transaction: Transaction): boolean => transaction.amount.value > 0;
