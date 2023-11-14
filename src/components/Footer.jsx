import React from "react";
import INSTAGRAM from "../assets/Instagram.png";

const FooterNavItems = ({ name, items }) => {
  return (
    <>
      <div className="col-4 text-white">
        <h1>{name}</h1>
        <div className="d-flex flex-column">
          {items.map((item) => {
            return (
              <a className="text-white text-decoration-none py-2" href="/">
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

const footerNavs = [
  {
    name: "Marketplace",
    items: ["Home", "Activity", "Discover", "Learn More"],
  },
  {
    name: "Company",
    items: ["About Us", "Service", "Portfolio"],
  },
  {
    name: "Contact",
    items: ["Facebook", "Instagram", "Twitter", "Email"],
  },
];

const socialMedia = [INSTAGRAM, INSTAGRAM, INSTAGRAM];

function Footer() {
  return (
    <div className="w-100 row mt-5">
      <div className="col-4 ">
        <p className="fs-3 text-white ps-5">
          Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis
          magna faucibus lacus.
        </p>
      </div>
      <div className="col-8 row">
        {footerNavs.map((nav) => {
          return <FooterNavItems {...nav} />;
        })}
      </div>
      <hr className="border" />
      <div className="w-100 px-5 pb-5 pt-3 d-flex justify-content-between ">
        <div className="d-flex col-4">
          {socialMedia.map((url, index) => {
            return <img key={index} src={url} alt="INSTAGARAM" />;
          })}
        </div>
        <div>
          <p className="text-white">Copyright 2021 JLegacy-AI</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
