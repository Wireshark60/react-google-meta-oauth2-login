import React, { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

function MetaLogin() {
  // const profileObj = [];

  const [profile, setProfile] = useState(null);

  FB.login(function (response) {
    // handle the response
  });

  FB.logout(function (response) {
    // Person is now logged out
  });

  return (
    <div>
      {!profile ? (
        <LoginSocialFacebook
          appId="1681372635697251"
          onResolve={(response) => {
            // console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        ""
      )}

      {profile ? (
        <div>
          <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} />
        </div>
      ) : (
        " "
      )}
    </div>
  );
}

export default MetaLogin;

// yarn add reactjs-social-login react-social-login-buttons
