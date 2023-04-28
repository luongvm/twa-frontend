import React, { FC, PropsWithChildren } from "react";
import MainNav from "./MainNav";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <MainNav></MainNav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
