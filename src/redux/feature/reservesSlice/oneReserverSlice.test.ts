import mockListReserves from "../../../mocks/mockReserves";
import oneReserveReducer, {
  loadOneReserveActionCreator,
} from "./oneReserveSlice";
import { IReserveDetail } from "../../types/reservesTypes";

describe("When its invoked with a setUserToShow action with a user", () => {
  test("Then it should return the same user at the userToShow propety of the object", () => {
    const action = loadOneReserveActionCreator(mockListReserves[0]);

    const initialState: IReserveDetail = {
      oneReserve: {
        _id: "",
        name: "",
        DNI: "",
        imageBackup: "",
        image: "",
        date: "",
        hour: 0,
        numberPersons: 0,
      },
    };

    const { oneReserve } = oneReserveReducer(initialState, action);

    expect(oneReserve).toEqual(mockListReserves[0]);
  });
});
