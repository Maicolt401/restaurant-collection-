import LoginFormComponent from "../../components/loginFormComponent/LoginFormComponent";
import StyledPageLogin from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <StyledPageLogin>
        <h1>Restaurant Collection</h1>
        <h2>LOGIN</h2>
      </StyledPageLogin>
      <LoginFormComponent />
    </>
  );
};

export default LoginPage;
