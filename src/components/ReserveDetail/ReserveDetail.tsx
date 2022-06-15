import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getOneReserveThunk } from "../../redux/thunks/reservesThunk/reservesThunk";

const DetailStyled = styled.div`
  @media (max-width: 600px) {
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .detail {
      border: 2px;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 250px;
      text-align: center;
      border-radius: 45px;
      .image {
        padding-top: 10px;
        border-radius: 25px;
        width: 200px;
        object-fit: cover;
        height: 200px;
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .date {
          border: 1px;
          text-align: center;
          font-family: sans-serif;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: inherit;
          white-space: nowrap;
          width: 162px;
        }
      }
      .buttonClick {
        cursor: pointer;
        border: none;
        background: none;
        padding: 0;
        margin-top: 15px;
        margin-bottom: 15px;
        p {
          background-color: #f8cc9f;
          font-size: 25px;
          text-decoration: underline;
          color: black;
          border-radius: 5px;
        }
      }
    }
  }

  @media (min-width: 599px) {
    width: 100%;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .detail {
      border: 2px;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 450px;
      text-align: center;
      border-radius: 45px;
      .image {
        padding-top: 10px;
        border-radius: 25px;
        width: 300px;
        object-fit: cover;
        height: 300px;
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .date {
          border: 1px;
          text-align: center;
          font-family: sans-serif;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: inherit;
          white-space: nowrap;
          width: 162px;
        }
      }
      .buttonClick {
        cursor: pointer;
        border: none;
        padding: 0;
        margin-top: 15px;
        margin-bottom: 15px;
        p {
          font-size: 35px;
        }
      }
    }
  }
`;

const ReserveDetail = (): JSX.Element => {
  const { oneReserve } = useAppSelector((state) => state.reserve);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const editReserve = () => {
    navigate(`/edit/${oneReserve._id}`);
    dispatch(getOneReserveThunk(oneReserve._id));
  };

  const urlImage =
    "https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png";

  return (
    <>
      <DetailStyled>
        <div className="detail">
          <img
            src={oneReserve.imageBackup || urlImage}
            alt="person to reserve"
            className="image"
          />
          <h2>{oneReserve.name}</h2>

          <section className="info">
            <span className="date">Date: {oneReserve.date}</span>
            <span> Hour: {oneReserve.hour} hrs</span>
            <span> Number Persons:{oneReserve.numberPersons} </span>
          </section>
          <button className="buttonClick" onClick={editReserve}>
            <p>Edit Reserve</p>{" "}
            {/* <img src="image/edit.png" alt="edit icon" /> */}
          </button>
        </div>
      </DetailStyled>
    </>
  );
};

export default ReserveDetail;
