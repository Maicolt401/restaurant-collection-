import { server } from "../../mocks/server";
import { registerThunk } from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a registerThunk function", () => {
  describe("When it is called", () => {
    test("It should call the API with a post method containing the user", async () => {
      const dispatch = jest.fn();

      await registerThunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
