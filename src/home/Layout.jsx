import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full bg-background flex-col min-h-screen">
      <Navbar search />
      <main className="flex-grow ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
