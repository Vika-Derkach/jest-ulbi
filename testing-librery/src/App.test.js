import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("TEST APP", () => {
  test("renders learn react link", () => {
    render(<App />);
    const helloworldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloworldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
  test("renders hello2", async () => {
    render(<App />);
    const helloworldElem = screen.queryByText(/hello2/i);

    expect(helloworldElem).toBeNull();
    const data = await screen.findByText(/data/i);
    expect(data).toBeInTheDocument();
    expect(data).toHaveStyle({ color: "red" });
  });

  test("CLICK EVENT", () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-btn");

    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });
  test("INPUT EVENT", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);

    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    // fireEvent.input(input, {
    //   target: {
    //     value: "123123",
    //   },
    // });

    userEvent.type(input, "123123");
    expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
  });
});
