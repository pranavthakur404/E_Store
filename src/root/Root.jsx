import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
