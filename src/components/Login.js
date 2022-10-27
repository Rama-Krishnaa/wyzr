import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import { refreshTokenSetup } from '../utils/refreshToken';

function Login() {
  const navigate = useNavigate();

  function handleSubmit(res) {
    navigate("/home");
    alert(`Welcome ${res.profileObj.givenName}`);
    refreshTokenSetup(res);
  }

  const responseGoogle = (res) => {
    // localStorage.setItem('user', JSON.stringify(res.profileObj));
    alert('Login failed');
  };

  return (
    <div className="flex items-center justify-center h-screen py-6 sm:py-12">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
        buttonText="Sign in with Google"
        onSuccess={handleSubmit}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
