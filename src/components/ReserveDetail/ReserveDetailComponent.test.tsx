import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ReserveDetail from "./ReserveDetail";

describe("Given a ReserveDetail component", () => {
  describe("When ti should in the document the text `name`", () => {
    test("Then it show a text `name` its the same to 1", () => {
      const expectResult = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ReserveDetail />
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getAllByRole("img");

      expect(expectedText).toHaveLength(expectResult);
    });
  });
});
