const FormComponent = (): JSX.Element => {
  return (
    <>
      <form className="login-form" autoComplete="off" noValidate>
        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="name">
            Restaurant Name
            <input
              className="login-form__input"
              type="text"
              id="name"
              placeholder="Name"
            />
          </label>
          <label className="login-form__label" htmlFor="password">
            CIF
            <input
              className="login-form__input"
              type="text"
              id="cif"
              placeholder="Password"
            />
          </label>
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
            Register
          </button>
          <p>Do you have an account?</p>
          <a href="." className="">
            Click here to log in
          </a>
        </div>
      </form>
    </>
  );
};

export default FormComponent;
