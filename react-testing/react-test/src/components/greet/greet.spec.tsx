import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);

    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Jitendra" />);

    const textElement = screen.getByText(/hello jitendra/i);
    expect(textElement).toBeInTheDocument();
  });
});
