import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import { refreshTokenSetup } from '../utils/refreshToken';
import '../App.css';

function Login() {
  const navigate = useNavigate();

  function handleSubmit(res) {
    navigate("/home");
    alert(`Welcome ${res.profileObj.givenName}`);
    refreshTokenSetup(res);
  }

  const responseGoogle = (res) => {
    localStorage.setItem('user', JSON.stringify(res.profileObj));
    alert('Login failed');
  };

  return (
    <div className="signIn-btn">
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
