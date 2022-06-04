import RegisterFormComponent from "../../components/RegisterComponent/RegisterFormComponent";
import StyledPageRegister from "./registerPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <StyledPageRegister>
        <h1>Restaurant Collection</h1>
        <h2>REGISTER</h2>
      </StyledPageRegister>
      <RegisterFormComponent />;
    </>
  );
};

export default RegisterPage;
