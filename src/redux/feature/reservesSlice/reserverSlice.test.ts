import mockListReserves from "../../../mocks/mockReserves";
import { deleteReserveActionCreator } from "./reservesSlice";
import reservesReducer from "./reservesSlice";

describe("Given a deleteReserve component", () => {
  describe("When it should to reserve", () => {
    test("Then it show in to the document whitout to reverse edit", () => {
      const initialState = { AllReserves: mockListReserves };

      const expectedState = {
        AllReserves: [
          {
            name: mockListReserves[1].name,
            hour: mockListReserves[1].hour,
            _id: mockListReserves[1]._id,
            numberPersons: mockListReserves[1].numberPersons,
            DNI: mockListReserves[1].DNI,
            date: mockListReserves[1].date,
            image: mockListReserves[1].image,
          },
        ],
      };

      const id = "56423";

      const action = deleteReserveActionCreator(id);
      const newState = reservesReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});
