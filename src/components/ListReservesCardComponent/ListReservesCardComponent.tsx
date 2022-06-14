import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadReservesThunks } from "../../redux/thunks/reservesThunk/reservesThunk";
import { IreservesSimple } from "../../redux/types/reservesTypes";
import ReservesCardComponent from "../ReservesCardComponent/ReservesCardComponent";
import styled from "styled-components";

const ReserverStyled = styled.div`
  @media (min-width: 601px) {
    .page {
      margin-left: 25%;
    }
  }

  .page {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    button {
      cursor: pointer;
      border: none;
      background: none;
      padding: 0;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
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
      <ReserverStyled>
        <div className="page">
          <button
            onClick={() => {
              if (index >= 4) {
                setIndex(index - 4);
              }
            }}
          >
            <img src="image/previus.png" alt="previus icon" />
          </button>
          <button
            onClick={() => {
              if (index < AllReserves.length - 4) {
                setIndex(index + 4);
              }
            }}
          >
            <img src="image/next.png" alt="next icon" />
          </button>
        </div>
      </ReserverStyled>
    </>
  );
};

export default ListReservesCardComponent;
