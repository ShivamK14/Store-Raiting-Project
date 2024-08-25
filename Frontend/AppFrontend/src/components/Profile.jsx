import { useState } from "react";
import useLogout from "../hooks/useLogout";
const Profile = () => {
  const { loading, logout } = useLogout();
  const [toggelprofile, setToggelProfile] = useState();
  const user = JSON.parse(localStorage.getItem("store-user"));
  console.log(user.fullName);
  return (
    <>
      <div>
        <img
          id="avatarButton"
          type="button"
          onClick={() => setToggelProfile(!toggelprofile)}
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          class="w-10 h-10 rounded-full cursor-pointer"
          src={user.profilePic}
          alt="User dropdown"
        />

        {toggelprofile && (
          <div
            id="userDropdown"
            class="z-20 fixed bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 xs:right-5 sm:right-5 md:right-5 xxl:right-52"
          >
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{user.fullName}</div>
              <div class="font-medium truncate">{user.username}</div>
            </div>
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="avatarButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
            </ul>
            <div class="py-1">
              <a
                href="#"
                onClick={logout}
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Profile;
