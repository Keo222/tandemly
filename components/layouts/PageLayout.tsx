import React from "react";

// Components
import Navbar from "components/generic/navbar/Navbar";

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
