import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

jest.mock("jwt-decode", () => () => ({
  id: "1",
  name: "maicol",
  username: "maicol",
}));

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given an App component", () => {
  describe("When it's rendered and a user is not logged", () => {
    test("Then it should render a text  'Register'", () => {
      const expectedText = "Click here to register";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      const expectedResult = screen.getByText(expectedText);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
