import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import StyledComponentCreate from "./CreateControllerStyled";
import {
  createReserveThunk,
  editReserveThunk,
} from "../../redux/thunks/reservesThunk/reservesThunk";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IReserves } from "../../redux/types/reservesTypes";

const CreateController = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { idReserves } = useParams();
  const dispatch = useAppDispatch();
  const { reserves } = useAppSelector((state) => state);

  const editReserve = reserves.AllReserves.find(
    (reserve: IReserves) => reserve._id === idReserves
  );

  const clearFiles = {
    name: editReserve ? editReserve.name : "",
    _id: editReserve ? editReserve._id : "",
    date: editReserve ? editReserve.date : "",
    DNI: editReserve ? editReserve.DNI : "",
    image: editReserve ? editReserve.image : "",
    hour: editReserve ? editReserve.hour : 0,
    imageBackup: editReserve ? editReserve.imageBackup : "",
    numberPersons: editReserve ? editReserve.numberPersons : 0,
  };
  const [formData, setFormData] = useState(clearFiles);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newReserve = new FormData();

    newReserve.append("name", formData.name);
    newReserve.append(
      "date",
      new Date(formData.date).toISOString().split("T")[0]
    );
    newReserve.append("hour", `${formData.hour}`);
    newReserve.append("DNI", formData.DNI);
    newReserve.append("image", formData.image);
    if (formData.imageBackup) {
      newReserve.append("image", formData.imageBackup);
    }
    newReserve.append("numberPersons", `${formData.numberPersons}`);
    formData._id
      ? await dispatch(editReserveThunk(formData._id, formData))
      : await dispatch(createReserveThunk(newReserve));
    setFormData(clearFiles);

    navigate("/home");
  };

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || "",
    });
  };

  return (
    <>
      <StyledComponentCreate>
        <form
          className="login-form"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="login-form__wrapper">
            <label className="login-form__label" htmlFor="name">
              Name
              <input
                className="login-form__input"
                type="text"
                id="name"
                placeholder="mario..."
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label className="login-form__label" htmlFor="hour">
              Hour
              <input
                className="login-form__input"
                type="time"
                id="hour"
                placeholder="hour"
                value={formData.hour}
                onChange={handleInputChange}
              />
            </label>
            <label className="login-form__label" htmlFor="numberPersons">
              Number People
              <input
                className="login-form__input"
                type="number"
                id="numberPersons"
                placeholder="Number Of people...0 - 20 "
                value={formData.numberPersons}
                onChange={handleInputChange}
              />
            </label>
            <label className="login-form__label" htmlFor="password">
              Date
              <input
                className="login-form__input"
                type="date"
                id="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </label>
            <label className="login-form__label" htmlFor="image">
              Image
              <div className="login-form__Image">
                <input
                  id="imageBackup"
                  type="file"
                  autoComplete="off"
                  onChange={uploadImage}
                />
              </div>
            </label>
            <button className="login-form__button" type="submit">
              {location.pathname === "/add" ? "Create Reserve" : "Edit Reserve"}
            </button>
          </div>
        </form>
      </StyledComponentCreate>
    </>
  );
};

export default CreateController;
