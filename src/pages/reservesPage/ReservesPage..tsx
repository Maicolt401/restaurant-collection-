import ListReservesCardComponent from "../../components/ListReservesCardComponent/ListReservesCardComponent";
import NavLinkComponent from "../../components/NavLinkComponent/NavLinkComponent";
import styled from "styled-components";

const ReserverStyled = styled.div`
  color: #a93528;

  h1 {
    margin-top: 45px;
    text-align: center;
  }
  @media (min-width: 601px) {
    h1 {
      margin-left: 25%;
    }
  }
`;

const ReservesPage = (): JSX.Element => {
  return (
    <>
      <NavLinkComponent />
      <ReserverStyled>
        <h1>Your reservations</h1>
      </ReserverStyled>
      <ListReservesCardComponent />
    </>
  );
};

export default ReservesPage;
