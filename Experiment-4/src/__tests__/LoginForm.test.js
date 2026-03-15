import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

test("shows validation message if fields are empty", () => {

  render(<LoginForm />);

  const button = screen.getByText("Submit");

  fireEvent.click(button);

  expect(screen.getByText("All fields are required")).toBeInTheDocument();

});

test("shows success message when form is filled", () => {

  render(<LoginForm />);

  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "test@email.com" }
  });

  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "123456" }
  });

  fireEvent.click(screen.getByText("Submit"));

  expect(screen.getByText("Login Successful")).toBeInTheDocument();

});