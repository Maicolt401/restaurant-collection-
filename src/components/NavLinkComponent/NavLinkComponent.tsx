import StyledNav from "./NavLinkComponentStyled";

const NavLinkComponent = (): JSX.Element => {
  return (
    <>
      <StyledNav>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn">
            <span></span>
          </label>

          <ul className="menu__box">
            <li>
              <a className="menu__item" href=".">
                Home
              </a>
            </li>
            <li>
              <a className="menu__item" href=".">
                Calendary
              </a>
            </li>
            <li>
              <a className="menu__item" href=".">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </StyledNav>
    </>
  );
};

export default NavLinkComponent;
