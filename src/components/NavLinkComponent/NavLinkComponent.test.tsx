import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockListReserves from "../../mocks/mockReserves";
import store from "../../redux/store/store";
import NavLinkComponent from "./NavLinkComponent";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppSelector: () => mockListReserves,
  useAppDispatch: () => mockDispatch,
}));

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
  describe("When the logout button is clicked", () => {
    test("Then a logout action will be dispatched", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NavLinkComponent />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
