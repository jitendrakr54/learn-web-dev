import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

/* 
test("renders Hello World as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ... nothing (for now)

  // Assert
  const helloWorldElement = screen.getByText("Hello World", { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});
 */

// *************************************************** Grouping Tests together with Test Suits
/* 
describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing (for now)

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
 */

// ***************************************** Testing user interaction & state
describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing (for now)

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if button was not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'changed' if button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button"); //we can get button by text as well
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByText("Change Text");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
