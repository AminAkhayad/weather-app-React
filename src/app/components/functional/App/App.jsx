import { Outlet } from "react-router";
import Footer from "@design/Footer/Footer";
import Header from "@design/Header/Header";
import "./App.css";

import useAuth from "@functional/Auth/useAuth";

const App = () => {
   const {user} =useAuth();
 
   
  return (
    <section className="main-container">
      <Header user={user} />
      <Outlet />
      <Footer />
    </section>
  );
};

export default App;
