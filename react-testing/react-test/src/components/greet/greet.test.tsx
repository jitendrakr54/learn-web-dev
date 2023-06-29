// ***************************************** Your First test
/* 
import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders correctly", () => {
  // Arrange
  render(<Greet />);

  // Act
  // ... nothing (for now)

  // Assert
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
*/

// ***************************************** Test Driven Development
/**
 * Greet should render the text hello and if a name is passed into the component it should render hello followed by that
 * name
 */
/* 
import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);

  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Jitendra" />);

  const textElement = screen.getByText(/hello jitendra/i);
  expect(textElement).toBeInTheDocument();
});
*/

// ***************************************** Grouping Tests
// /*
import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);

    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  // test("renders with a name", () => {
  //   render(<Greet name="Jitendra" />);

  //   const textElement = screen.getByText(/hello jitendra/i);
  //   expect(textElement).toBeInTheDocument();
  // });
});
// */

// ***************************************** Nested describe
/* 
import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);

    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("renders with a name", () => {
      render(<Greet name="Jitendra" />);

      const textElement = screen.getByText(/hello jitendra/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});
*/
