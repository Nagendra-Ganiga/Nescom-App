import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks/use_outside_click/useOutsideClick";
import useFetch from "../../hooks/use_fetch/useFetch";
import Skeleton from "@mui/material/Skeleton";
import SkeletonWrapper from "../../common_ui/mui_skeleton/skeleton_wrapper/skeletonWrapper";
import PATHS from "../../routes/Paths";
import { ImagesIndex } from "../../assets/images/image_index/ImageIndex";

export default function LoginDropdown() {
  // It is coming from the useOutsideClick custom hook,
  // which is used to handle the dropdown menu's visibility and detect clicks outside of it.
  const { ref: dropdownRef, active, toggleActive } = useOutsideClick(false);
  const dropdownActiveClass = active ? "active" : "";

  const getScrapData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/todos/1",
    // );
    // const json = await response.json();

    // return [json];

    return [
      {
        name: "Steve Smith",
        email: "steve.smith@example.com",
      },
    ];
  };
  const { data, loading } = useFetch(getScrapData);

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
          <img
            className="profile-frame"
            src={ImagesIndex.FrameLogin}
            alt="User"
          />
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
            <img
              className="down-arrow"
              src={ImagesIndex.DownArrow}
              alt="Down Arrow"
            />
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
          <Link to={PATHS.USER_MANAGEMENT} className="link-rw">
            <img src={ImagesIndex.UserManagement} alt="User Management" />
            <span>User Management</span>
          </Link>
          <Link to={PATHS.CONTACT_MANAGEMENT} className="link-rw">
            <img src={ImagesIndex.ContactManagement} alt="Contact Management" />
            <span>Contact Management</span>
          </Link>
          <Link to={"/logout"} className="link-rw">
            <img src={ImagesIndex.Logout} alt="Logout" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
