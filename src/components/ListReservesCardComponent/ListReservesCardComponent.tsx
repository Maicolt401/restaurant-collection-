import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadReservesThunks } from "../../redux/thunks/reservesThunk/reservesThunk";
import { IreservesSimple } from "../../redux/types/reservesTypes";
import ReservesCardComponent from "../ReservesCardComponent/ReservesCardComponent";

const ListReservesCardComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadReservesThunks());
  }, [dispatch]);

  let initialPage: IreservesSimple[] = [];

  const AllReserves: IreservesSimple[] = useAppSelector(
    (state) => state.reserves.AllReserves
  );

  const [currentPage, setCurrentPage] = useState(initialPage);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentPage(AllReserves.slice(0, 4));
  }, [AllReserves]);

  useEffect(() => {
    setCurrentPage(AllReserves.slice(index, index + 4));
  }, [index, AllReserves]);

  return (
    <>
      {currentPage.map((reserve, index) => {
        return <ReservesCardComponent key={index} reserves={reserve} />;
      })}
      <div className="page">
        <button
          onClick={() => {
            if (index >= 4) {
              setIndex(index - 4);
            }
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (index < AllReserves.length - 4) {
              setIndex(index + 4);
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ListReservesCardComponent;
