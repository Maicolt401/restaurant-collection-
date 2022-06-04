import { ChangeEvent, FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { loginThunk } from "../../redux/thunks/userThunks";
import StiledComponentFormLogin from "./LoginFormComponentStyled";
interface FormData {
  username: string;
  password: string;
}

const LoginFormComponent = (): JSX.Element => {
  const blankFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(blankFields);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (formData.username === "" || formData.password === "") {
      return;
    }
    dispatch(loginThunk(formData));
    setFormData(blankFields);
  };

  return (
    <>
      <StiledComponentFormLogin>
        <form
          className="login-form"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="login-form__wrapper">
            <label className="login-form__label" htmlFor="username">
              Username
              <input
                className="login-form__input"
                type="text"
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </label>
            <button className="login-form__button" type="submit">
              Login
            </button>
            <p>Do you don`t have an account?</p>
            <NavLink to="/register" className="">
              Click here to register
            </NavLink>
          </div>
        </form>
      </StiledComponentFormLogin>
    </>
  );
};

export default LoginFormComponent;
