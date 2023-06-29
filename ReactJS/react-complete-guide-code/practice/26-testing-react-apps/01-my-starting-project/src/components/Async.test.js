import { render, screen } from "@testing-library/react";
import Async from "./Async";

// ************************************************ Testing asynchronous code
/* 
describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    render(<Async />);

    // With getAllByRole test will fail, because getAllByRole() will look for listitem immediately but listitem is
    // dependent on fetch which is async call, so lisitem won't be available in DOM, hence it fails.
    // const listItemsElemenst = screen.getAllByRole("listitem");

    const listItemsElemenst = await screen.findAllByRole("listitem");
    expect(listItemsElemenst).not.toHaveLength(0);
  });
});
 */

// ************************************************ Working with mocks

describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);

    const listItemsElements = await screen.findAllByRole("listitem");
    expect(listItemsElements).not.toHaveLength(0);
  });
});
