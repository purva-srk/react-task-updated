import { render, fireEvent } from "@testing-library/react";
import ItemPrice from "./ItemPrice";

test("should calculate the total cost correctly", () => {
  const { getByTestId, getByText } = render(<ItemPrice />);

  const priceInput = getByTestId("price");
  const quantityInput = getByTestId("quantity");

  fireEvent.change(priceInput, { target: { value: "10" } });
  fireEvent.change(quantityInput, { target: { value: "5" } });

  const totalCost = getByText("The total cost of 5 items is 50.00");
  expect(totalCost).toBeInTheDocument();
});
