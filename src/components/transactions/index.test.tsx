import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TransactionHistory } from ".";
import { ReactQueryWrapper } from "../../../jest.utils";

describe("transaction history", () => {
  test("the expenses tab should be shown by default", () => {
    render(<ReactQueryWrapper><TransactionHistory /></ReactQueryWrapper>);

    expect(screen.getByText("Transaction History")).toBeInTheDocument();

    waitFor(() => {
      const expensesTabTrigger = screen.getByRole("tab", {
        name: "Expenses",
      });

      expect(expensesTabTrigger).toHaveAttribute("data-state", "active");

      const expensesTable = screen.getByRole("table", {
        name: "Expenses",
      });

      expect(expensesTable).toBeInTheDocument();
      expect(screen.getByText("-€20.25")).toBeInTheDocument();
    })
  });

  test('The expenses tab should shown a loading indicator if data is loading', () => {
    render(<ReactQueryWrapper><TransactionHistory /></ReactQueryWrapper>);

    const loadingIndicator = screen.getByRole('alert');
    expect(loadingIndicator).toBeInTheDocument();
  })

  test("changing between the expenses and income tabs should show different transactions", () => {
    render(<ReactQueryWrapper><TransactionHistory /></ReactQueryWrapper>);

    waitFor(async () => {
      const expensesTabTrigger = screen.getByRole("tab", {
        name: "Expenses",
      });
      const incomeTabTrigger = screen.getByRole("tab", {
        name: "Income",
      });
      const expensesTable = screen.getByRole("table", {
        name: "Expenses",
      });
      const incomeTable = screen.queryByRole("table", {
        name: "Income",
      });

      expect(expensesTable).toBeInTheDocument();
      expect(incomeTable).not.toBeInTheDocument();

      expect(screen.getByText("-€20.25")).toBeInTheDocument();

      await userEvent.click(incomeTabTrigger);
      expect(incomeTabTrigger).toHaveAttribute("data-state", "active");
      expect(expensesTabTrigger).toHaveAttribute("data-state", "inactive");
      expect(screen.queryByText("-€20.25")).not.toBeInTheDocument();
    })
  });
});
