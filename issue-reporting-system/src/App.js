import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./Components";

function App() {
  return (
    <div className="bg-slate-50">
      <Header />
      <main>TODO: {/* <Outlet /> */}</main>
      <Footer />
    </div>
  );
}

export default App;
