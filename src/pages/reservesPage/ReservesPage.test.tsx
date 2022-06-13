import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ReservesPage from "./ReservesPage.";

describe("Given a HomePage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a button with the text logout'", () => {
      const expectedResult = "Your reservations";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ReservesPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
