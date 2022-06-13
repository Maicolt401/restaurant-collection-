import { useAppDispatch } from "../../redux/hooks/hooks";
import { IreservesSimple } from "../../redux/types/reservesTypes";
import styled from "styled-components";
import {
  deleteReserveThunk,
  getOneReserveThunk,
} from "../../redux/thunks/reservesThunk/reservesThunk";
import { useNavigate } from "react-router-dom";

interface Props {
  reserves: IreservesSimple;
}

const ReserverStyled = styled.div`
  color: #a93528;

  .info {
    border: 5px;
    margin: 20px;
    background-color: white;
    font-size: 20px;
    main {
      border: 1px;
      font-family: sans-serif;
      font-size: 1.3rem;
      line-height: 1.4;
      overflow: hidden;
      text-overflow: inherit;
      white-space: nowrap;
      width: 205px;
      margin: auto;

      font-size: 40px;
      margin-bottom: 2px;
      margin-left: 10px;
    }

    p {
      margin-left: 10px;
      margin-bottom: 0px;
      margin-top: 0px;
    }

    button {
      cursor: pointer;
      border: none;
      background: none;
      padding: 0;

      img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
    }

    .delete {
      height: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
    }
  }
`;

const ReservesCardComponent = ({
  reserves: { name, hour, numberPersons, _id, date },
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDelete = (): void => {
    dispatch(deleteReserveThunk(_id));
  };

  const handleDetail = (): void => {
    navigate(`/detail/${_id}`);
    dispatch(getOneReserveThunk(_id));
  };

  return (
    <>
      <ReserverStyled>
        <section className="info">
          <main>{date}</main>
          <p> {name}</p>
          <p>{hour} hrs</p>
          <p>NUMBERS PERSONS: {numberPersons}PAX</p>
          <section className="delete">
            <button onClick={handleDelete}>
              <img src="image/delete.png" alt="delete icon" />
            </button>
            <button onClick={handleDetail}>Detail Reserve</button>
          </section>
        </section>
      </ReserverStyled>
    </>
  );
};

export default ReservesCardComponent;
