import styled from "styled-components";

const StiledComponentFormLogin = styled.div`
  background-color: white;
  border: 2px solid rgb(243, 244, 246);
  padding: 3rem 2.5rem;
  border-radius: 1.5rem;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);

  .login-form {
    &__wrapper {
      padding-bottom: 0px;
    }

    &__label {
      font-weight: 400;
      font-size: 1.3rem;
      color: white;
    }

    &__input {
      width: calc(100% - 2rem);
      border: 1px solid #222;
      border-radius: 0.375rem;
      padding: 0.75rem 1rem;
      outline: none;
      font-size: 1rem;
    }

    &__button {
      margin-top: 25px;
      width: 100%;
      padding: 0.75rem 1rem;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.25rem;
      cursor: pointer;
    }

    &__text {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      font-size: 1rem;
      font-weight: 400;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    color: blue;
    font-size: 15px;
  }
  p {
    text-align: center;
  }
`;

export default StiledComponentFormLogin;
