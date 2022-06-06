import { IreversesSimple } from "../../redux/types/reservesTypes";
import { FormEvent } from "react";

// interface Props {
//   reserve: IreversesSimple;
// }

const ReservesCardComponent = (): //   {
//   reserve: { name, numberPerson, time },
// }: Props
JSX.Element => {
  const handleOnChange = (event: FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
  };

  return (
    <>
      <section className="info">
        <h1>Yours reservations</h1>
        <p>name: olga</p>
        <p>time: 19:30 hrs</p>
        <p>NUMBERS PERSONS: 5PAX</p>
      </section>
    </>
  );
};

export default ReservesCardComponent;
