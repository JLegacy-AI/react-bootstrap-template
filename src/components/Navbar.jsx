import React from "react";
import LOGO from "../assets/Logo.png";

const NavItems = ({ name, link }) => {
  return (
    <li className="nav-item ">
      <a className="nav-link px-4 text-white" aria-current="page" href={link}>
        {name}
      </a>
    </li>
  );
};

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "MY PROFILE",
    link: "/",
  },
  {
    name: "Activity",
    link: "/",
  },
  {
    name: "HOW IT WORKS",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg px-5"
      style={{
        backgroundColor: "#1f1d2b",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={LOGO} alt="LOGO" />
        </a>
        <div
          className="collapse navbar-collapse d-flex w-100 justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {navItems.map((item, index) => {
              return <NavItems key={index} {...item} />;
            })}
          </ul>
        </div>
        <div className="d-flex" role="search">
          <button className="btn btn-outline-light" type="submit">
            Create
          </button>
          <button
            className="btn btn-light bg-transparent text-secondary text-nowrap ms-3 border-0 "
            type="submit"
            style={{
              outline: "none !important",
            }}
          >
            SIGN IN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
