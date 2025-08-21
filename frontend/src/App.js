import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Scraper from "./Scraper";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login Success:", credentialResponse);
    alert("Login successful! You can now fetch headlines.");
  };

  const handleLoginError = () => {
    console.log("Login Failed");
    alert("Login failed. Try again.");
  };

  return (
    <GoogleOAuthProvider clientId="76234263817-dpe73h388fmdqq43qd9hc1n35ad3jam9.apps.googleusercontent.com">
      <div className="App text-center mt-5">
        <h1>Web Scraper Portal</h1>
        <div className="d-flex justify-content-center mb-4">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </div>
        <Scraper />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
