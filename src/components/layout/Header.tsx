import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/route.constants";
import styles from './Header.module.css';
import { useAppSelector } from "../../app/store";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/store/authSlice";

export default function Header() {
  const isAuthen = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("accessToken");
  };
  return (
    <header
      style={{
        backgroundColor: "#2563eb",
        padding: "16px 32px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>My App</h1>

      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <NavLink
                className={({isActive}) => isActive ? styles.active : ''}
              to={ROUTES.HOME}
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              to={ROUTES.HOME}
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.LOGIN}
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to={ROUTES.PRODUCT_LIST}
              style={{ color: "white", textDecoration: "none" }}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={handleLogout} style={{ backgroundColor: "transparent", border: "none", color: "white", cursor: "pointer" }}>
        {isAuthen ? 'Logout' : 'Login'}
      </button>
    </header>
  );
}