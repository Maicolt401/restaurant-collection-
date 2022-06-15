import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import NavLinkComponent from "../../components/NavLinkComponent/NavLinkComponent";
import ReserveDetail from "../../components/ReserveDetail/ReserveDetail";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { getOneReserveThunk } from "../../redux/thunks/reservesThunk/reservesThunk";

const ReserverStyled = styled.div`
  color: #a93528;

  h1 {
    margin-top: 45px;
    text-align: center;
  }
  a {
    font-size: 25px;
    text-decoration: none;
    color: #a93528;
    text-align: center;
    display: flex;
    text-decoration: underline;
    flex-direction: column;
    padding-top: 25px;
    padding-bottom: 35px;
  }
`;

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
      <ReserverStyled>
        <h1>Detail Reserve</h1>

        <ReserveDetail />
        <NavLink to="/home"> Go Back</NavLink>
      </ReserverStyled>
    </>
  );
};

export default DetailPage;
