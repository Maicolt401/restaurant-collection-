import axios from "axios";
import mockListReserves from "../../../mocks/mockReserves";
import { server } from "../../../mocks/server";
import { loadReservessActionCreator } from "../../feature/reservesSlice/reservesSlice";
import { loadReservesThunks } from "./reservesThunk";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadChecksThunk", () => {
  describe("When its called", () => {
    test("then it should dispatch loadChecksActionCreator", async () => {
      const dispatch = jest.fn();
      const action = loadReservessActionCreator(mockListReserves);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({
        data: { reserves: mockListReserves },
        status: 200,
      });

      const thunk = loadReservesThunks();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
