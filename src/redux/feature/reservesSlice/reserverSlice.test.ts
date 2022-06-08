import mockListReserves from "../../../mocks/mockReserves";
import { deleteReserveActionCreator } from "./reservesSlice";
import reservesReducer from "./reservesSlice";

describe("Given a NavLinkComponet component", () => {
  describe("When it should the text `Home`", () => {
    test("Then it show teh text 'Home'", () => {
      const initialState = { AllReserves: mockListReserves };

      const expectedState = {
        AllReserves: [
          {
            name: mockListReserves[1].name,
            date: mockListReserves[1].date,
            _id: mockListReserves[1]._id,
            numberPersons: mockListReserves[1].numberPersons,
            DNI: mockListReserves[1].DNI,
            data: mockListReserves[1].data,
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
