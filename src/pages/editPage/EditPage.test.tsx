import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditPage from "./editReserve";

describe("Given a EditPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a button with the text Edit Reserve'", () => {
      const expectResult = 1;
      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getAllByRole("heading");

      expect(receivedResult).toHaveLength(expectResult);
    });
  });
});
