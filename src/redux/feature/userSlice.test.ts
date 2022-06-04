import { loginActionCreator, logouActionCreator } from "./userSlice";
import userReducer from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When it receives a user and a login action", () => {
    test("Then it should return user with property logged true", () => {
      const user = {
        restaurantName: "la villa",
        CIF: "s3213135",
        username: "rocky",
        password: "123456",
        logged: false,
      };

      const initialValue = { username: "", logged: false };

      const action = loginActionCreator(user);
      const receivedValue = userReducer(initialValue, action);

      expect(receivedValue.logged).toBe(true);
    });
  });

  describe("When it receives a logout action", () => {
    test("Then it should return logged to false", () => {
      const user = {
        name: "hola",
        username: "hola",
        logged: true,
      };

      const expectedResult = false;

      const logout = logouActionCreator();
      const userLoggout = userReducer(user, logout);

      expect(userLoggout.logged).toEqual(expectedResult);
    });
  });
});
