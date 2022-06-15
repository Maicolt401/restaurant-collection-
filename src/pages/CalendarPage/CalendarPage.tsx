import styled from "styled-components";
import NavLinkComponent from "../../components/NavLinkComponent/NavLinkComponent";

const StyledPageCreate = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #a93528;
  padding-bottom: 20px;

  h1 {
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    background-color: white;
    border: 5px white solid;
    border-radius: 20px;
    width: 200px;
  }
`;

const CalendarPage = (): JSX.Element => {
  return (
    <>
      <NavLinkComponent />
      <StyledPageCreate>
        <h1>Calendary</h1>
      </StyledPageCreate>
      <label
        id="date
      "
        className="login-form__label"
        htmlFor="username"
      >
        Date
        <input className="login-form__input" type="date" id="calendar" />
      </label>
      <button type="submit">search</button>
    </>
  );
};

export default CalendarPage;
