import { AuthContainer } from "./LayoutStyles";
import React from "react";

// import { Navbar } from "../components";

const AuthLayout = ({ children }) => {
  return (
    <>
      <AuthContainer>{children}</AuthContainer>
    </>
  );
};

export default AuthLayout;
