import React from "react";
import AppRoutes from "./components/AppRoutes";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
};

export default App;
