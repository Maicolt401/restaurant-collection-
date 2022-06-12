import axios from "axios";
import mockListReserves from "../../../mocks/mockReserves";
import { server } from "../../../mocks/server";
import {
  deleteReserveActionCreator,
  loadReservessActionCreator,
} from "../../feature/reservesSlice/reservesSlice";
import {
  createReserveThunk,
  deleteReserveThunk,
  loadReservesThunks,
} from "./reservesThunk";

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

describe("Given the deleteCheckThunk function", () => {
  describe("When it's called with an id", () => {
    test("Then it should call dispatch with the loadChecks action with the checks received from the axios request", async () => {
      const id = "2";
      const dispatch = jest.fn();
      const action = deleteReserveActionCreator(id);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.delete = jest.fn().mockResolvedValue({ status: 200 });

      const thunk = deleteReserveThunk(id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's called with an existent id", () => {
    test("Then it should'nt call dispatch", async () => {
      const id = "2";
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.delete = jest.fn().mockResolvedValue({});

      const thunk = deleteReserveThunk(id);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given a createCheckThunk", () => {
  describe("When its called", () => {
    test("then it should dispatch createCheckActionCreator", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.post = jest.fn().mockResolvedValue({
        data: { newReserve: { mockListReserves } },
        status: 201,
      });

      const thunk = createReserveThunk(mockListReserves[1]);
      await thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
