import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadReservesThunks } from "../../redux/thunks/reservesThunk/reservesThunk";
import { IreversesSimple } from "../../redux/types/reservesTypes";
import ReservesCardComponent from "../ReservesCardComponent/ReservesCardComponent";

const ListReservesCardComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadReservesThunks());
  }, [dispatch]);

  const reserves: IreversesSimple[] = useAppSelector(
    (state) => state.reserves.reserves
  );

  return (
    <>
      {reserves.map((reserve, index) => {
        return <ReservesCardComponent key={index} />;
      })}
    </>
  );
};

export default ListReservesCardComponent;
