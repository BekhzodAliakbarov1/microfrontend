import React from "react";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
