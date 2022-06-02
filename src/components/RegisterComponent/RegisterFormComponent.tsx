import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { registerThunk } from "../../redux/thunks/userThunks";
import StiledComponentFormRegister from "./RegisterFormComponentStyle";

interface FormData {
  restaurantName: string;
  username: string;
  CIF: string;
  password: string;
}

const RegisterFormComponent = (): JSX.Element => {
  const clearFiles = {
    restaurantName: "",
    username: "",
    CIF: "",
    password: "",
  };

  const [formData, setformData] = useState<FormData>(clearFiles);
  const dispatch = useAppDispatch();

  const handleImputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setformData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(registerThunk(formData));
    setformData(clearFiles);
  };

  return (
    <>
      <StiledComponentFormRegister>
        <form
          className="login-form"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="login-form__wrapper">
            <label className="login-form__label" htmlFor="RestaurantName">
              Restaurant Name
              <input
                className="login-form__input"
                type="text"
                id="restaurantName"
                placeholder="Restaurant Name"
                value={formData.restaurantName}
                onChange={handleImputChange}
              />
            </label>
            <label className="login-form__label" htmlFor="CIF">
              CIF
              <input
                className="login-form__input"
                type="text"
                id="CIF"
                placeholder="CIF"
                value={formData.CIF}
                onChange={handleImputChange}
              />
            </label>
            <label className="login-form__label" htmlFor="username">
              Username
              <input
                className="login-form__input"
                type="text"
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleImputChange}
              />
            </label>
            <label className="login-form__label" htmlFor="password">
              Password
              <input
                className="login-form__input"
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleImputChange}
              />
            </label>
            <button className="login-form__button" type="submit">
              Register
            </button>
            <p>Do you have an account?</p>
            <a href="." className="">
              Click here to log in
            </a>
          </div>
        </form>
      </StiledComponentFormRegister>
    </>
  );
};

export default RegisterFormComponent;
