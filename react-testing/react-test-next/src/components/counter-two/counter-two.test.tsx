import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counter-two";
import user from "@testing-library/user-event";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementButon = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButon = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(incrementButon);
    await user.click(decrementButon);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
