import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";
import TopNotification from "../layout/TopNotification";
import MainNav from "../layout/MainNav";

const Root = () => {
  return (
    <>
      <TopNotification />
      <MainNav />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
