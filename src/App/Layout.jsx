import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet /> {/* Здесь рендерятся страницы */}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
