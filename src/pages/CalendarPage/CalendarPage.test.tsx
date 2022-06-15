import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CalendarPage from "./CalendarPage";

describe("Given a CalendarPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a headin its the same to 1", () => {
      const expectResult = 1;
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CalendarPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getAllByRole("heading");

      expect(receivedResult).toHaveLength(expectResult);
    });
  });
});
