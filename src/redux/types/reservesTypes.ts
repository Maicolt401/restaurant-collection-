export interface IReserves {
  name: string;
  _id: string;
  DNI: string;
  image: string;
  date: string;
  hour: number;
  numberPersons: number;
}

export interface IreservesSimple {
  name: string;
  _id: string;
  numberPersons: number;
  hour: number;
}
