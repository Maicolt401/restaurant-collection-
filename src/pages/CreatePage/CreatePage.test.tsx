import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreatePage from "./CreatePage";

describe("Given a CreatePage function", () => {
  describe("When it should in the document a heading", () => {
    test("Then it should show render in to the document a heading its the same to 1", () => {
      const expecResult = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreatePage />
          </Provider>
        </BrowserRouter>
      );

      const form = screen.getAllByRole("heading");

      expect(form).toHaveLength(expecResult);
    });
  });
});
