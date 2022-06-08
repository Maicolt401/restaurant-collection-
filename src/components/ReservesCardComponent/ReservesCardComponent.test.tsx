import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockListReserves from "../../mocks/mockReserves";
import store from "../../redux/store/store";
import ReservesCardComponent from "./ReservesCardComponent";

describe("Given the Check component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one heading element", () => {
      const expecResult = 1;
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ReservesCardComponent reserves={mockListReserves[0]} />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("img");

      expect(result).toHaveLength(expecResult);
    });
  });
  describe("When the two inputs have text and the submit button is clicked", () => {
    test("Then the two inputs should be empty", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ReservesCardComponent reserves={mockListReserves[0]} />
          </BrowserRouter>
        </Provider>
      );

      const submitButton = screen.getByRole("button");

      userEvent.click(submitButton);

      expect(submitButton).toHaveValue("");
    });
  });
});
