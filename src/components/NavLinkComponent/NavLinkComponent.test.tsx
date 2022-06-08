import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NavLinkComponent from "./NavLinkComponent";

describe("Given a NavLinkComponet component", () => {
  describe("When it should the text `Home`", () => {
    test("Then it show teh text 'Home'", () => {
      const expectText = "Home";
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NavLinkComponent />
          </BrowserRouter>
        </Provider>
      );

      const expectedResult = screen.getByText(expectText);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
