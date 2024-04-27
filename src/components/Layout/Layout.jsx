import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selector";
import clsx from "clsx";
import css from "./Layout.module.css";
import { logout } from "../../redux/auth/operations";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink className={getNavLinkClassName} to="/contacts">
                Contacts
              </NavLink>
              <div>
                <span>Hi, {user.name}</span>
                <button onClick={onLogout} type="button">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink className={getNavLinkClassName} to="/register">
                Register
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/login">
                Login
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
