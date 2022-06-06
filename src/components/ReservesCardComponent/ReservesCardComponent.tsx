import { IreservesSimple } from "../../redux/types/reservesTypes";
interface Props {
  reserves: IreservesSimple;
}

const ReservesCardComponent = ({
  reserves: { name, time, numberPerson },
}: Props): JSX.Element => {
  return (
    <>
      <section className="info">
        <h1>Yours reservations</h1>
        <p>name: {name}</p>
        <p>time: {time} hrs</p>
        <p>NUMBERS PERSONS: {numberPerson}PAX</p>
      </section>
      <section className="delete">
        <button>x</button>
      </section>
    </>
  );
};

export default ReservesCardComponent;
