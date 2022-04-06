import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Login successful!</h3>
      <h1>You are in Home Page</h1>
      <Link to="/search">Want to know about a book?</Link>
    </div>
  );
};

export default Home;
