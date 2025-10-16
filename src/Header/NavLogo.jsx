import React from "react";
// import logo from "../../../assets/blood-bag-logo.png";
import logo from "../assets/letter-a.png";
import { Link } from "react-router";

const NavLogo = () => {
  return (
    <Link to="/">
      <div className="flex">
        <img width={35} src={logo} alt="logo" />
        <p className="text-primary font-bold text-2xl -ml-1">SA AKTER RIMY</p>
      </div>
    </Link>
  );
};

export default NavLogo;
