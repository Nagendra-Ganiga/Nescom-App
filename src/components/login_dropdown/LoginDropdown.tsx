import FrameLogin from "../../assets/images/FrameLogin.svg";
import DownArow from "../../assets/images/DownArow.svg";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks/use_outside_click/useOutsideClick";
import useFetch from "../../hooks/use_fetch/useFetch";
import Skeleton from "@mui/material/Skeleton";
import SkeletonWrapper from "../../common_ui/mui_skeleton/skeleton_wrapper/skeletonWrapper";
import ContactManagment from "../../assets/images/ContactManagment.svg";
import Logout from "../../assets/images/Logout.svg";
import UserManagment from "../../assets/images/UserManagment.svg";

export default function LoginDropdown() {
  // It is coming from the useOutsideClick custom hook,
  // which is used to handle the dropdown menu's visibility and detect clicks outside of it.
  const { ref: dropdownRef, active, toggleActive } = useOutsideClick(false);
  const dropdownActiveClass = active ? "active" : "";

  const getScrapData = async () => [
    {
      name: "Steve Smith",
      email: "steve.smith@example.com",
    },
  ];
  const { data, loading } = useFetch(getScrapData, 1500);

  const dataValue = data?.[0];

  return (
    <div className="login-dropdown" ref={dropdownRef}>
      <button
        className={`login-button ${dropdownActiveClass}`}
        onClick={toggleActive}
      >
        <SkeletonWrapper
          loading={loading}
          skeleton={
            <Skeleton
              variant="circular"
              sx={{ width: "36px", height: "36px" }}
            />
          }
        >
          <img className="profile-frame" src={FrameLogin} alt="User" />
        </SkeletonWrapper>

        <div className="login-namme">
          <SkeletonWrapper
            loading={loading}
            skeleton={<Skeleton variant="text" sx={{ width: "80px" }} />}
          >
            <span>{dataValue?.name}</span>
          </SkeletonWrapper>
          <SkeletonWrapper
            loading={loading}
            skeleton={<Skeleton variant="text" sx={{ width: "12px" }} />}
          >
            <img className="down-arrow" src={DownArow} alt="Down Arrow" />
          </SkeletonWrapper>
        </div>
      </button>
      <div className={`dropdown-content ${dropdownActiveClass}`}>
        <div className="dropdown-wrapp">
          <div className="label">
            <span>Email</span>
          </div>
          <div className="text-content">
            <span>
              {loading ? (
                <Skeleton variant="text" sx={{ width: "80px" }} />
              ) : (
                dataValue?.email
              )}
            </span>
          </div>
        </div>
        <div className="link-page-wrapper">
          <Link to={"/user-management"} className="link-rw">
            <img src={UserManagment} alt="User Management" />
            <span>User Management</span>
          </Link>
          <Link to={"/contact-management"} className="link-rw">
            <img src={ContactManagment} alt="Contact Management" />
            <span>Contact Management</span>
          </Link>
          <Link to={"/logout"} className="link-rw">
            <img src={Logout} alt="Logout" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
