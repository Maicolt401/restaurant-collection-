import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateController from "../../components/CreateController/CreateController";
import NavLinkComponent from "../../components/NavLinkComponent/NavLinkComponent";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { getOneReserveThunk } from "../../redux/thunks/reservesThunk/reservesThunk";

const EditPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { idReserve } = useParams();

  useEffect(() => {
    if (idReserve) {
      dispatch(getOneReserveThunk(idReserve));
    }
  }, [dispatch, idReserve]);

  return (
    <>
      <NavLinkComponent />
      <h1>Edit Reserve</h1>
      <CreateController />
    </>
  );
};

export default EditPage;
