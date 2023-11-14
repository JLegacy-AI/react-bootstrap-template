import React from "react";

const NavItems = ({ name, link }) => {
  return (
    <li className="nav-item">
      <a className="nav-link active px-4" aria-current="page" href={link}>
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
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          FASTECH
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
          <button className="btn btn-outline-secondary" type="submit">
            Create
          </button>
          <button className="btn btn-light text-nowrap ms-3" type="submit">
            SIGN IN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
