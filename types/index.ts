export type SupporterCurrencies = 'USD' | 'EUR' | 'GBP' ;

type Balance = {
  amount: {
    currency: SupporterCurrencies
    value: number
  }
}

export type Transaction = {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: {
    value: number;
    currency_iso: SupporterCurrencies;
  };
}

export type Account = {
  account_id: string;
  balance: Balance;
}
