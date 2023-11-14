import React from "react";
import INSTAGRAM from "../assets/Instagram.png";

const FooterNavItems = ({ name, items }) => {
  return (
    <>
      <div className="col-4 text-white">
        <h1>{name}</h1>
        <div>
          {items.map((item) => {
            return <p>{item}</p>;
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
    name: "Marketplace",
    items: ["Facebook", "Instagram", "Twitter", "Email"],
  },
];

const socialMedia = [INSTAGRAM, INSTAGRAM, INSTAGRAM];

function Footer() {
  return (
    <div className="w-100 row">
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
      <hr />
      <div className="w-100 px-5 py-5">
        <div className="d-flex col-4">
          {socialMedia.map((url, index) => {
            return <img key={index} src={url} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
