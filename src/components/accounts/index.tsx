import { useQuery } from "react-query";
import { useFetch } from "../../hooks/useFetch"
import { AccountItem } from "./item";
import { Loading } from '../loading'
import { Account } from "../../../types";
import "./index.css";

export const Accounts = () => {
  const { data: accounts, isError, isLoading } = useQuery<Account[]>('accounts', () => useFetch('/api/accounts'), { retry: 1 })

  return (
    <>
      <h1 className="align-left">Your accounts</h1>

      {isLoading || isError &&
        <div className="info-container">
          {isLoading && <Loading />}
          {isError && <p>There was an error fetching your accounts</p>}
        </div>
      }
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
