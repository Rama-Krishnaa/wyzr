import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Home = () => {
  return (
    <div className="container">
      <Logout />
      <h3>Home Page</h3>
      <Link to="/search">Want to know about a book?</Link>
    </div>
  );
};

export default Home;
