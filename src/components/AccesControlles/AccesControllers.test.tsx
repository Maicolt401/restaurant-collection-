import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { AccesControlUnlogged } from "./AccesControlles";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a AccesController function", () => {
  describe("When its called when the user is not logged", () => {
    test("then it shoul navigate to /login", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { logged: false },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <AccesControlUnlogged>
            <h1>hola</h1>
          </AccesControlUnlogged>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });
  test("then it should render his children when the user is logged", () => {
    const userMockSlice = createSlice({
      name: "user",
      initialState: { logged: true },
      reducers: {},
    });
    const mockStore = configureStore({
      reducer: { user: userMockSlice.reducer },
    });

    render(
      <Provider store={mockStore}>
        <AccesControlUnlogged>
          <h1>hola</h1>
        </AccesControlUnlogged>
      </Provider>
    );

    const receivedElement = screen.getByRole("heading");

    expect(receivedElement).toBeInTheDocument();
  });
});
