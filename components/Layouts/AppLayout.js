import React from "react";
import Navbar from "components/Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="grid place-content-center gap-4">{children}</main>
    </>
  );
};

export default AppLayout;
