import { Client_ID, Client_secret, Client_secret2 } from "./OAuthClient"

import { GoogleLogout } from "react-google-login";

// const clientId =
//   "36599692246-e74767ihqjjn2mh6n1rbsq9nhno1pesn.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        console.log("Log out successfull!");
        
        window.location.reload(true);
    };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={Client_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;