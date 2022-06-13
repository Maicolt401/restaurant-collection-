import styled from "styled-components";
import CreateController from "../../components/CreateController/CreateController";
import NavLinkComponent from "../../components/NavLinkComponent/NavLinkComponent";

const ReserverStyled = styled.div`
  color: #a93528;

  h1 {
    margin-top: 45px;
    text-align: center;
  }
`;

const EditPage = (): JSX.Element => {
  return (
    <>
      <NavLinkComponent />
      <ReserverStyled>
        <h1>Edit Reserve</h1>
      </ReserverStyled>
      <CreateController />
    </>
  );
};

export default EditPage;
