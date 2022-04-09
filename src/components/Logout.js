import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/");
    alert("You've just logged out!");
  };

  return (
    <div>
      <GoogleLogout
        clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
        buttonText='Sign out'
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;