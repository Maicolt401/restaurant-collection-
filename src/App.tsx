import { Navigate, Route, Routes } from "react-router-dom";
import { AccesControlUnlogged } from "./components/AccesControlles/AccesControlles";
import AccesControlLogged from "./components/AccesControlles/AccesControlLogged";
import ReservesPage from "./pages/reservesPage/ReservesPage.";
import LoginPage from "./pages/loginPage/LoginPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/feature/userSlice";
import { UserData } from "./redux/types/userTypes";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePage from "./pages/CreatePage/CreatePage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App(): JSX.Element {
  const { logged } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token || logged) {
      const userData: UserData = jwtDecode(token as string);
      dispatch(loginActionCreator(userData));
    }
  }, [dispatch, logged]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <AccesControlLogged>
              <LoginPage />
            </AccesControlLogged>
          }
        />
        <Route
          path="/register"
          element={
            <AccesControlLogged>
              <RegisterPage />
            </AccesControlLogged>
          }
        />
        <Route
          path="/home"
          element={
            <AccesControlUnlogged>
              <ReservesPage />
            </AccesControlUnlogged>
          }
        />
        <Route
          path="/add"
          element={
            <AccesControlUnlogged>
              <CreatePage />
            </AccesControlUnlogged>
          }
        />
        <Route
          path="/edit/:idReserves"
          element={
            <AccesControlUnlogged>
              <DetailPage />
            </AccesControlUnlogged>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
