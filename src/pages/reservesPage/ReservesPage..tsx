import ListReservesCardComponent from "../../components/ListReservesCardComponent/ListReservesCardComponent";
import NavLinkComponent from "../../components/NavLinkComponent/NavLinkComponent";
import styled from "styled-components";

const ReserverStyled = styled.div`
  color: #a93528;

  h1 {
    text-align: center;
  }
`;

const ReservesPage = (): JSX.Element => {
  return (
    <>
      <NavLinkComponent />
      <ReserverStyled>
        <h1>Yours reservations</h1>
      </ReserverStyled>
      <ListReservesCardComponent />
    </>
  );
};

export default ReservesPage;
