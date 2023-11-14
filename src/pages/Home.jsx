import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Auctions from "../components/Auctions";
import { Discover } from "../components/Discover";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Auctions />
      <Discover />
      <Footer />
    </div>
  );
};

export default Home;
