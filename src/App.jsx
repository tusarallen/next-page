import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <div className="my-container">
      <Header />
      <Outlet />
      {/* Footer */}
    </div>
  );
};

export default App;
