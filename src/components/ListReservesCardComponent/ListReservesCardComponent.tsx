import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadReservesThunks } from "../../redux/thunks/reservesThunk/reservesThunk";
import { IreservesSimple } from "../../redux/types/reservesTypes";
import ReservesCardComponent from "../ReservesCardComponent/ReservesCardComponent";

const ListReservesCardComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadReservesThunks());
  }, [dispatch]);

  const AllReserves: IreservesSimple[] = useAppSelector(
    (state) => state.reserves.AllReserves
  );

  return (
    <>
      <h1>tot lo tens aqui</h1>
      {AllReserves.map((reserve, index) => {
        return <ReservesCardComponent key={index} reserves={reserve} />;
      })}
    </>
  );
};

export default ListReservesCardComponent;
