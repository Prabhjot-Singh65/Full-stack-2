import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("renders button text correctly", () => {
  render(<Button text="Click Me" />);
  
  const button = screen.getByText("Click Me");
  expect(button).toBeInTheDocument();
});

test("handles click event", () => {
  const mockFunction = jest.fn();

  render(<Button text="Click Me" onClick={mockFunction} />);

  const button = screen.getByText("Click Me");

  fireEvent.click(button);

  expect(mockFunction).toHaveBeenCalledTimes(1);
});