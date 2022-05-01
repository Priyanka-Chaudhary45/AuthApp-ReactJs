import { NavContainer } from "./NavStyles";
import { NavLink } from "react-router-dom";
import React from "react";
import { appRoutes } from "../../constants/appRoutes";
import logo from "../../assets/LogoLight.png";

const Navbar = () => {
  return (
    <>
      <NavContainer logo={logo}>
        <div className="logo" />
        <ul>
          <li className="active">
            <NavLink to={appRoutes.home}>Home</NavLink>
          </li>
          <li>
            <NavLink to={appRoutes.home}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={appRoutes.login}>Login</NavLink>
          </li>
        </ul>
      </NavContainer>
    </>
  );
};

export default Navbar;
