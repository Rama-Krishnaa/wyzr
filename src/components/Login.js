import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/home");
    console.log('Login successful');
  }

  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    console.log('Login failed');
    // const { name, googleId, imageUrl } = response.profileObj;
  };

  return (
    <div>
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
