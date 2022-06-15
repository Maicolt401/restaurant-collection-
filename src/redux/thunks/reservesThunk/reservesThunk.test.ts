import axios from "axios";
import mockListReserves from "../../../mocks/mockReserves";
import { server } from "../../../mocks/server";
import { loadOneReserveActionCreator } from "../../feature/reservesSlice/oneReserveSlice";
import {
  deleteReserveActionCreator,
  editReserveActionCreator,
  loadReservessActionCreator,
} from "../../feature/reservesSlice/reservesSlice";
import {
  createReserveThunk,
  deleteReserveThunk,
  editReserveThunk,
  getOneReserveThunk,
  loadReservesThunks,
} from "./reservesThunk";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadReservesThunk", () => {
  describe("When its called", () => {
    test("then it should dispatch loadReservessActionCreator", async () => {
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

describe("Given the DeleteReservesThunk function", () => {
  describe("When it's called with an id", () => {
    test("Then it should call dispatch with the loadReserves action with the reserves received from the axios request", async () => {
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

describe("Given a createReservesThunk", () => {
  describe("When its called", () => {
    test("then it should dispatch createReserveActionCreator", async () => {
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

describe("Given a getOneReserveThunk", () => {
  describe("When its called", () => {
    test("then it should dispatch loadOneReserverActionCreator", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: mockListReserves[0], status: 200 });

      const action = loadOneReserveActionCreator(mockListReserves[0]);
      const thunk = getOneReserveThunk(mockListReserves[0]._id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a loadOneReserve", () => {
  describe("When its called", () => {
    test("then it should dispatch loadOneReserveActionCreator", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: mockListReserves[0], status: 200 });

      const action = loadOneReserveActionCreator(mockListReserves[0]);
      const thunk = getOneReserveThunk(mockListReserves[0]._id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given the editNoteThunk function", () => {
  describe("When it's called with an id to edit and a note", () => {
    test("Then it should call dispatch with the new note edited received from the axios request", async () => {
      const dispatch = jest.fn();
      const action = editReserveActionCreator(mockListReserves[0]);

      const mockNewReserve = {
        name: "maria cristhina",
        _id: "2312",
        hour: 19,
        numberPersons: 8,
        DNI: "asdasd6526",
        date: "18/03/2022",
        image: "image/asda564",
        imageBackup: "image/asdasdsad",
      };

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.put = jest.fn().mockResolvedValue({ data: mockListReserves[0] });

      const thunk = editReserveThunk(mockListReserves[0]._id, mockNewReserve);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
