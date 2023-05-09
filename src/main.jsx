import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./Language/i18next/i18next";
import "./scss/styles.scss";

// const providerConfig = {
//   domain: "http://localhost:3000",
//   clientId: "diVszaCFrsZAOpvDE2bgyB5QeezyODgj",
//   redirect_uri: "http://localhost:3000",
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="jvhr.us.auth0.com"
      clientId="diVszaCFrsZAOpvDE2bgyB5QeezyODgj"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
      // {...providerConfig}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
