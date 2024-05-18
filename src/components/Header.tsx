import { IoMenuSharp } from "react-icons/io5";
import Logo from "./Logo";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import Avator from "./Avator";

const Header = () => {
  const [isSun, setIsSun] = useState(true);

  const handleThemeClick = () => {
    setIsSun(!isSun);
  };

  return (
    <header className=" flex justify-between items-center px-4 py-3 mb-2 shadow-md h-full">
      {/* logo, toggle */}
      <div className=" flex justify-center items-center gap-3">
        <IoMenuSharp size={35} className=" border" />
        <Logo />
      </div>

      {/* search bar  */}
      <form className="max-w-md mx-auto w-1/3">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block ml-3 w-full p-4 ps-10 text-md font-light focus:outline-none "
            placeholder="Type to search..."
            required
          />
        </div>
      </form>

      {/* theme, notification and profile  */}
      <div className=" flex gap-2 items-center justify-center">
        {/* theme  */}
        <button
          onClick={handleThemeClick}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          {isSun ? (
            <FaSun className="text-gray-500" />
          ) : (
            <FaMoon className="text-gray-500" />
          )}
        </button>

        {/* notification */}
        <button className="p-3 rounded-full bg-gray-200  hover:bg-gray-300  focus:outline-none">
          <FaBell className="text-gray-500" />
        </button>

        {/* profile  */}
        <Avator profile={"https://api.dicebear.com/8.x/pixel-art/svg"} />
      </div>
    </header>
  );
};

export default Header;
