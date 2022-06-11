import CreateController from "../../components/CreateController/CreateController";
import NavLinkComponent from "../../components/NavLinkComponent/NavLinkComponent";
import StyledPageCreate from "./CreatePageStyled";

const CreatePage = () => {
  return (
    <>
      <NavLinkComponent />
      <StyledPageCreate>
        <h1>Add New Reserve</h1>
      </StyledPageCreate>
      <CreateController />
    </>
  );
};

export default CreatePage;
