import { useState } from "react";
import { Client_ID, Client_secret, Client_secret2 } from "./OAuthClient";

import { GoogleLogin } from "react-google-login";

// const clientId =
//   "36599692246-e74767ihqjjn2mh6n1rbsq9nhno1pesn.apps.googleusercontent.com";

function Login() {
  const profileObj = [];

  const [profile, setProfile] = useState(profileObj);
  const [isLoading, setIsLoading] = useState(false);

  const onSuccess = (res) => {
    setIsLoading(true);

    // console.log("LOGIN SUCCESS! Current user:", res.profileObj);

    profileObj.push(res.profileObj);
    // console.log(profile);
    
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res:", res);
  };

  return (
    <div id="signInButton">
      {isLoading ? (
        <>
          {profile.map((item, index) => (
            <div key={index}>
              <img src={item.imageUrl} alt="logo" />
              <ul>email: {item.email}</ul>
              <ul>familyName: {item.familyName}</ul>
              <ul>givenName: {item.givenName}</ul>
              {/* <ul>googleId: {item.googleId}</ul> */}
              <ul>name: {item.name}</ul>
            </div>
          ))}
        </>
      ) : null}

      <GoogleLogin
        theme="filled_blue"
        clientId={Client_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onfailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
