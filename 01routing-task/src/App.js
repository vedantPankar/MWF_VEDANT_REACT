import { Footer, Header, Welcome } from "./Components/";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Welcome name={"GRASS SOLUTIONS PVT LTD"} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
