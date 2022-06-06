import { IreversesSimple } from "../../redux/types/reservesTypes";
import { FormEvent } from "react";

interface Props {
  reserve: IreversesSimple;
}

const ReservesCardComponent = ({
  reserve: { name, numberPerson, time },
}: Props): JSX.Element => {
  const handleOnChange = (event: FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
  };

  return (
    <>
      <section className="info">
        <h2>{name}</h2>
        <label htmlFor="times">time:</label>
        <input
          min={0}
          max={64}
          type="number"
          id="times"
          value={time}
          onChange={handleOnChange}
        />
        <label htmlFor="times">Number Person: {numberPerson}</label>
      </section>
      {/* <h1>Yours reservations</h1>
      <p>name: olga</p>
      <p>time: 19:30 hrs</p>
      <p>DNI/NIE/PASSPORT: Y8337345C </p>
      <p>NUMBERS PERSONS: 5PAX</p>
      <img
        src="https://media.gq.com.mx/photos/5e220ec2ffa8c7000803441e/16:9/w_2560%2Cc_limit/40-datos-curiosos-para-descubrir-a-scarlett-johansson.jpg"
        alt="hello"
      /> */}
    </>
  );
};

export default ReservesCardComponent;
