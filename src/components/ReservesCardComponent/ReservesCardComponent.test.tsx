import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockListReserves from "../../mocks/mockReserves";
import store from "../../redux/store/store";
import ReservesCardComponent from "./ReservesCardComponent";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useNavigate: () => mockNavigate,
}));

describe("Given the Check component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one heading element", () => {
      const expecResult = 1;
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ReservesCardComponent reserves={mockListReserves[0]} />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("img");

      expect(result).toHaveLength(expecResult);
    });
  });
  describe("when its clicked the button", () => {
    test("then it should call dispatch", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ReservesCardComponent reserves={mockListReserves[0]} />
          </BrowserRouter>
        </Provider>
      );

      const buttons = screen.getAllByRole("button");
      userEvent.click(buttons[0]);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
  describe("when its clicked the button Details", () => {
    test("then it should call navigate", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ReservesCardComponent reserves={mockListReserves[0]} />
          </BrowserRouter>
        </Provider>
      );

      const buttons = screen.getAllByRole("button");
      userEvent.click(buttons[1]);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
