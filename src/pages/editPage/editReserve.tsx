import CreateController from "../../components/CreateController/CreateController";
import NavLinkComponent from "../../components/NavLinkComponent/NavLinkComponent";

const EditPage = (): JSX.Element => {
  return (
    <>
      <NavLinkComponent />
      <h1>Edit Reserve</h1>
      <CreateController />
    </>
  );
};

export default EditPage;
