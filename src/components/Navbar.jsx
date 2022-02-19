import React from "react";
import { Link } from "react-router-dom";
import { Search } from "."
import google from "../assets/cgoogle.jpg";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm: justify-between justify-center items-center border-b dark: border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
         
            <img src={google} alt="google" className="w-24"/>
          
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg outline-none">
            {darkTheme ? "Clair 💡" : "Sombre 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
