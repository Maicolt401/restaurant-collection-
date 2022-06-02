import { NavLink } from "react-router-dom";
import StiledComponentFormLogin from "./LoginFormComponentStyled";

const LoginFormComponent = () => {
  return (
    <>
      <StiledComponentFormLogin>
        <form className="login-form" autoComplete="off" noValidate>
          <div className="login-form__wrapper">
            <label className="login-form__label" htmlFor="username">
              Username
              <input
                className="login-form__input"
                type="text"
                id="username"
                placeholder="Username"
              />
            </label>
            <label className="login-form__label" htmlFor="password">
              Password
              <input
                className="login-form__input"
                type="password"
                id="password"
                placeholder="Password"
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
