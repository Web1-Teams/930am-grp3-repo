import React from "react";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Nav />

      {/* Main Content */}
      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Rafeeq Community</h1>
        
        {/* SignUp Component */}
        <SignUp />

        {/* Login Component */}
        <Login />
      </div>
    </div>
  );
}

export default App;