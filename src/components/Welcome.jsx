import React from "react";
import WELCOME_CARD from "../assets/Welcome-Card.png";

function Welcome() {
  return (
    <div
      className="row px-5"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="col-8 text-white d-flex justify-content-center  align-items-start flex-column ">
        <p
          className="fw-bold w-50"
          style={{
            fontSize: "40px",
          }}
        >
          Discover, collect, and charity in extraordinary NFT marketplace
        </p>
        <p className="fs-5 w-50">
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p>
        <div className="d-flex justify-content-start align-items-center col-6">
          <button type="button" class="btn btn-outline-light col-3">
            Explore
          </button>
          <div className="col-1"></div>
          <button
            type="button"
            class="btn btn-dark col-3"
            style={{
              backgroundColor: "#9B51E0",
            }}
          >
            Create
          </button>
        </div>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center ">
        <img height={400} width="auto" src={WELCOME_CARD} alt="Welcome Card" />
      </div>
    </div>
  );
}

export default Welcome;
