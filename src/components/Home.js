import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-evenly m-3">
        <h1>Home Page</h1>
        <Logout />
      </div>
      <div className="flex flex-col items-center mt-40">
        <h3>Want to know about a book?</h3>
        <Link
          to="/search"
          className="text-gray-900 bg-white border border-gray-300 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 m-10"
        >
          Click here
        </Link>
      </div>
    </div>
  );
};

export default Home;
