import { render, screen } from "@testing-library/react";
import App from "./app";
import {ReactQueryWrapper} from "../jest.utils";

it("App renders without crashing", () => {
  render(<ReactQueryWrapper><App /></ReactQueryWrapper>);

  expect(screen.getByText("Your accounts")).toBeInTheDocument();
});
