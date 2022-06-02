import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a FormComponent function", () => {
  describe("When it should in the document a label", () => {
    test("Then it should show render in to the document a button its the same to 1", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const form = screen.getByLabelText("Username");

      expect(form).toBeInTheDocument();
    });
  });
});
