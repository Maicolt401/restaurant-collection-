import { mockClientRegister, mockLoginUser } from "../../mocks/handlres";
import { server } from "../../mocks/server";
import { loginThunk, registerThunk } from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () => () => ({ username: "jota", id: "1" }));

describe("Given a registerThunk function", () => {
  describe("When it is called", () => {
    test("It should call the API with a post method containing the user", async () => {
      const dispatch = jest.fn();

      const thunk = await registerThunk(mockClientRegister);
      thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a LoginThunk", () => {
  describe("When its called", () => {
    test("Then it should call the dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = loginThunk(mockLoginUser);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
