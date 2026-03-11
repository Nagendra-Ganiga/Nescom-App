import { Link } from "react-router-dom";
import NescomLogo from "../../assets/images/NescomLogo.svg";
import LoginDropdown from "../login_dropdown/LoginDropdown";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="nav-left-wrapper">
          <div className="nav-logo">
            <Link to="/">
              <img src={NescomLogo} alt="Logo" />
            </Link>
          </div>
          <div className="nav-links-wrapper">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              StockOut Announcement
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Historique Communication
            </NavLink>
          </div>
        </div>
      </div>
      <div className="nav-right">
        <div className="login-wrapp">
          <LoginDropdown />
        </div>
      </div>
    </nav>
  );
}
