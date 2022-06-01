import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import RegisterFormComponent from "./FormComponent";

describe("Given a FormComponent function", () => {
  describe("When it should in the document a label", () => {
    test("Then it should show render in to the document a button its the same to 1", () => {
      const expectedButton = 1;

      render(
        <Provider store={store}>
          <RegisterFormComponent />
        </Provider>
      );

      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(expectedButton);
    });
  });
});
