import { render, fireEvent } from "@testing-library/react";
import CounterTesting from "./CounterTesting.js";

test("counter displays correct initial count", () => {
  const { getByTestId } = render(<CounterTesting />);
  const countValue = Number(getByTestId("count").textContent);
  expect(countValue).toEqual(0);
});
test("count should increment by 1 if the increment button is clicked", () => {
  const { getByTestId, getByRole } = render(
    <CounterTesting initialCount={0} />
  );
  const incrementButton = getByRole("button", { name: "Increment" });
  fireEvent.click(incrementButton);
  const countValue = Number(getByTestId("count").textContent);
  expect(countValue).toEqual(1);
});
test("count should decrement by 1 if the decrement button is clicked", () => {
  const { getByTestId, getByRole } = render(
    <CounterTesting initialCount={0} />
  );
  const decrementButton = getByRole("button", { name: "Decrement" });
  fireEvent.click(decrementButton);
  const countValue = Number(getByTestId("count").textContent);
  expect(countValue).toEqual(-1);
});
test("count should be 0 if the restart button is clicked", () => {
  const { getByTestId, getByRole } = render(
    <CounterTesting initialCount={50} />
  );
  const restartButton = getByRole("button", { name: "Restart" });
  fireEvent.click(restartButton);
  const countValue = Number(getByTestId("count").textContent);
  expect(countValue).toEqual(0);
});
test("count should invert signs if the switch signs button is clicked", () => {
  const { getByTestId, getByRole } = render(
    <CounterTesting initialCount={50} />
  );
  const switchButton = getByRole("button", { name: "Switch Signs" });
  fireEvent.click(switchButton);
  const countValue = Number(getByTestId("count").textContent);
  expect(countValue).toEqual(-50);
});
