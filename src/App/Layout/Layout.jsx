import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePage from "../../pages/home/HomePage";

import "./style.css";
const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__content">
        <Header />
        <main className="layout__main">
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
