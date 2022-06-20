import React, { PropsWithChildren } from "react";
import MainNavbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Sidebar from "./sidebar/Sidebar";

interface PageWrapperProps {
  children: any;
}

const PageWrapper: React.FC<PropsWithChildren<PageWrapperProps>> = ({
  children,
}) => {
  return (
    <>
      <MainNavbar />
      <Sidebar />
      <div className="page-wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default PageWrapper;
