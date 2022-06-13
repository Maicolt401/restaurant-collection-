import StyledNav, { StyledBorder } from "./NavLinkComponentStyled";
import { NavLink, useNavigate } from "react-router-dom";
import { correctAction } from "../../modals/modals";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { logouActionCreator } from "../../redux/feature/userSlice";

const NavLinkComponent = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logouActionCreator());
    navigate("/login");
    correctAction("logged out");
  };

  return (
    <>
      <StyledBorder>
        <StyledNav>
          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <ul className="menu__box">
              <li>
                <NavLink to="/login" className="menu__item">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="menu__item">
                  Calendary
                </NavLink>
              </li>
              <li>
                <NavLink to="/add" className="menu__item">
                  Add New Reserve
                </NavLink>
              </li>
              <li>
                <button onClick={logout} className="menu__item">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </StyledNav>
      </StyledBorder>
    </>
  );
};

export default NavLinkComponent;
