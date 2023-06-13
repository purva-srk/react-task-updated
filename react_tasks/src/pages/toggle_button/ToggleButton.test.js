import { render, fireEvent } from "@testing-library/react";
import ToggleButton from "./ToggleButton";

test("should show and hide the text when corresponding button is clicked", () => {
  const { getByText, getByTestId, queryByText } = render(<ToggleButton />);
  const input = getByTestId("input");
  const showButton = getByText("Show");
  const hideButton = getByText("Hide");

  expect(queryByText("Test Text")).toBeNull();
  fireEvent.change(input, { target: { value: "Test Text" } });
  fireEvent.click(showButton);
  expect(queryByText("Test Text")).toBeInTheDocument();
  fireEvent.click(hideButton);
  expect(queryByText("Test Text")).toBeNull();
});
