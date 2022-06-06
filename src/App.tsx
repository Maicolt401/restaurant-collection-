import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import ReserverPage from "./pages/reservesPage/ReservesPage.";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<ReserverPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
