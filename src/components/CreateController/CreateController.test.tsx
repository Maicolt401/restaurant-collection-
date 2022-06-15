import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreateController from "./CreateController";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a CreateController component", () => {
  describe("When ti should in the document the text `name`", () => {
    test("Then it show a text `name` its the same to 1", () => {
      const expectResult = "Name";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateController />
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getByText(expectResult);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
