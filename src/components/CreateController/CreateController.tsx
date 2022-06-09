import StyledComponentCreate from "./CreateControllerStyled";

const CreateController = () => {
  return (
    <>
      <StyledComponentCreate>
        <form className="login-form" autoComplete="off" noValidate>
          <div className="login-form__wrapper">
            <label className="login-form__label" htmlFor="RestaurantName">
              Name
              <input
                className="login-form__input"
                type="text"
                id="restaurantName"
                placeholder="Restaurant Name"
              />
            </label>
            <label className="login-form__label" htmlFor="CIF">
              Hour
              <input
                className="login-form__input"
                type="text"
                id="CIF"
                placeholder="CIF"
              />
            </label>
            <label className="login-form__label" htmlFor="username">
              Number Persons
              <input
                className="login-form__input"
                type="text"
                id="username"
                placeholder="Username"
              />
            </label>
            <label className="login-form__label" htmlFor="password">
              Date
              <input
                className="login-form__input"
                type="password"
                id="password"
                placeholder="Password"
              />
            </label>
            <label className="login-form__label" htmlFor="password">
              DNI
              <input
                className="login-form__input"
                type="password"
                id="password"
                placeholder="Password"
              />
            </label>
            <label className="login-form__label" htmlFor="image">
              Image
              <div className="login-form__Image">
                <input id="image" type="file" autoComplete="off" />
              </div>
            </label>
            <button className="login-form__button" type="submit">
              Register
            </button>
            <p>Do you have an account?</p>
          </div>
        </form>
      </StyledComponentCreate>
    </>
  );
};

export default CreateController;
