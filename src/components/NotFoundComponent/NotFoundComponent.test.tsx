import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NotfoundComponent from "./NotFountComponent";

describe("Given a NotfFoundComponent function", () => {
  describe("When it render the text `sorry`", () => {
    test("Then it should in to the document the text `sorry`", () => {
      const headingTotal = 1;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotfoundComponent />
          </Provider>
        </BrowserRouter>
      );

      const expectresult = screen.getAllByRole("heading");

      expect(expectresult).toHaveLength(headingTotal);
    });
  });
});
