import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";

interface Children {
  children: JSX.Element;
}

export const AccesControlUnlogged = ({ children }: Children) => {
  const { logged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  if (logged) {
    return children;
  }
  return null;
};
