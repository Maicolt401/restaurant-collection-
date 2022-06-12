import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavLinkComponent from "../../components/NavLinkComponent/NavLinkComponent";
import ReserveDetail from "../../components/ReserveDetail/ReserveDetail";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { getOneReserveThunk } from "../../redux/thunks/reservesThunk/reservesThunk";

const DetailPage = (): JSX.Element => {
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
      <ReserveDetail />
    </>
  );
};

export default DetailPage;
