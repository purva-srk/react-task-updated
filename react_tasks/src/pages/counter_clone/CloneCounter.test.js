import { render, fireEvent } from "@testing-library/react";
import CounterApp from "./CounterApp";
import CloneCounter from "./CloneCounter";

describe("CounterApp", () => {
  test("renders without error", () => {
    render(<CounterApp />);
  });

  test("increments the counter when the '+' button is clicked", () => {
    const { getByText, getByTestId } = render(<CounterApp />);
    const incrementButton = getByText("+");

    fireEvent.click(incrementButton);

    const counterInput = getByTestId("counter-input");
    expect(counterInput.value).toBe("1");
  });

  test("decrements the counter when the '-' button is clicked", () => {
    const { getByText, getByTestId } = render(<CounterApp />);
    const decrementButton = getByText("-");

    fireEvent.click(decrementButton);

    const counterInput = getByTestId("counter-input");
    expect(counterInput.value).toBe("-1");
  });

  test("updates the counter value when the input is changed", () => {
    const { getByTestId } = render(<CounterApp />);
    const counterInput = getByTestId("counter-input");

    fireEvent.change(counterInput, { target: { value: "42" } });

    expect(counterInput.value).toBe("42");
  });
});

describe("CloneCounter", () => {
  test("renders without error", () => {
    render(<CloneCounter />);
  });

  test("updates the counter count when 'Add New' button is clicked", () => {
    const { getByText } = render(<CloneCounter />);
    const addButton = getByText("Add New");

    fireEvent.click(addButton);

    const counterCount = getByText("There are 2 counters currently active");
    expect(counterCount).toBeInTheDocument();
  });
});
