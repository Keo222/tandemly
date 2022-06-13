import React from "react";
import Navbar from "../generic/Navbar";

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PageLayout;
