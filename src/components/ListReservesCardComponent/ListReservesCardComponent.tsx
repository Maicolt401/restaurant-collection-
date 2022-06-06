import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import ReservesCardComponent from "../ReservesCardComponent/ReservesCardComponent";

const ListReservesCardComponent = (): JSX.Element => {
 const dispathc = useAppDispatch();

  const { reserves } =  useAppSelector((state) => state.reserves)
  
 return ();
};

export default ListReservesCardComponent;
