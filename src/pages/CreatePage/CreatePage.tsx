import CreateController from "../../components/CreateController/CreateController";
import StyledPageCreate from "./CreatePageStyled";

const CreatePage = () => {
  return (
    <>
      <StyledPageCreate>
        <h1>Add New Reserve</h1>
      </StyledPageCreate>
      <CreateController />
    </>
  );
};

export default CreatePage;
