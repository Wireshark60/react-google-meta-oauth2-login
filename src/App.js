import logo from "./logo.svg";
import "./App.css";

import {
  Client_ID,
  Client_secret,
  Client_secret2,
} from "./components/OAuthClient";
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";

import { useEffect } from "react";
import { gapi } from "gapi-script";
import MetaLogin from "./MetaLogin";

// const clientId =
//   "36599692246-e74767ihqjjn2mh6n1rbsq9nhno1pesn.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: Client_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div
      className="App"
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginButton />
      <LogoutButton />
      <MetaLogin />
    </div>
  );
}

export default App;

// yarn add react-google-login
// yarn add gapi-script
// https://console.cloud.google.com/welcome
