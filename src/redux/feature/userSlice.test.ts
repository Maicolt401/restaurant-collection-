import userReducer, { registerActionCreator } from "./userSlice";

describe("Given a usersSlice with Register reducer", () => {
  describe("When we pass a new user", () => {
    test("Then it should return the new state with the new user", () => {
      const initialValue = {
        name: "",
        username: "",
        id: "",
        logged: false,
      };
      const receivedValue = {
        restauranName: "la villa de sants",
        username: "villisca",
        CIF: "321354",
        password: "123456",
      };

      const action = registerActionCreator(receivedValue);
      const newState = userReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});
