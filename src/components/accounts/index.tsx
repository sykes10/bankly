import { AccountItem } from "./item";
import "./index.css";
import { useQuery } from "react-query";
import { Account } from "../../../types";

export const Accounts = () => {
  const { data: accounts, isLoading, error } = useQuery<Account[]>('accounts', () =>
    fetch('/api/accounts').then(response => response.json())
  )

  console.log({accounts, isLoading, error})
  return (
    <>
      <h1 className="align-left">Your accounts</h1>

      {isLoading && '...loading'}
      {error && `There's been an unexpected errro`}
      {accounts &&
        <div className="accounts">
          {accounts.map((account) => (
            <AccountItem account={account} key={account.account_id} />
          ))}
        </div>
      }
    </>
  );
};
