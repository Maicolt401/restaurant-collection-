export interface IReserves {
  name: string;
  oneReserve?: "";
  _id: string;
  DNI: string;
  image: string;
  imageBackup?: string;
  date: string;
  hour: number;
  numberPersons: number;
}

export interface IreservesSimple {
  name: string;
  _id: string;
  numberPersons: number;
  hour: number;
  date: string;
  imageBackup?: string;
}
