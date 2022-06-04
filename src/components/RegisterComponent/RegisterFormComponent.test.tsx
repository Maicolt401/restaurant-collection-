import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterFormComponent from "./RegisterFormComponent";

describe("Given a FormComponent function", () => {
  const inputText = "CIF";
  const labelTextPassword = "Password";
  const labelTextUsername = "Username";
  describe("When it should in the document a label", () => {
    test("Then it should show render in to the document a button its the same to 1", () => {
      const expectedButton = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterFormComponent />
          </Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(expectedButton);
    });

    test("Then it should render the labels 'Username','Password','ResturantName' and `CIF`", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterFormComponent />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getAllByText("Username")).toHaveLength(1);
      expect(screen.getAllByText("Password")).toHaveLength(1);
      expect(screen.getAllByText("CIF")).toHaveLength(1);
      expect(screen.getAllByText("Restaurant Name")).toHaveLength(1);
    });
  });
  describe("When the username and password input fields are fill and the button clicked", () => {
    test("Then the value of the username and password input fields should be empty", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterFormComponent />
          </Provider>
        </BrowserRouter>
      );

      userEvent.type(screen.getByLabelText(labelTextPassword), inputText);
      userEvent.type(screen.getByLabelText(labelTextUsername), inputText);
      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(screen.getByLabelText(labelTextPassword)).toHaveValue("");
      expect(screen.getByLabelText(labelTextUsername)).toHaveValue("");
    });
  });
});
