import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import Avatar from "../images/avatar.png";
const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="">
      <div className="md:max-w-lg md:flex mx-auto  items-center shadow-orange-50 shadow-xl p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
        <div className="profile-img w-[25%] rounded-full" title={user?.displayName}>
          {user?.photoURL ? (
            <img
              className="rounded-full "
              src={user?.photoURL}
              alt=""
              srcSet=""
            />
          ) : (
            <>
              <img
                className="rounded-full profile-img"
                src={Avatar}
                alt=""
                srcset=""
              />
            </>
          )}
        </div>
        <div className="flex flex-col  space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">
              Name: {user?.displayName ? user?.displayName : "Please Sign In"}
            </h2>
            <span className="text-sm dark:text-gray-400">Uid: {user?.uid}</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="dark:text-gray-400">Email: {user?.email}</span>
            </span>
            <span>
              {user?.uid ? (
                <>
                  <button
                    onClick={logOut}
                    aria-label="blog"
                    title="Sign Out"
                    className="btn btn-primary mt-4"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    aria-label="blog"
                    title="Sign Out"
                    className="btn btn-primary mt-4"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
