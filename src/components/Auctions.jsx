import React from "react";
import AUCTION_1 from "../assets/auction-1.png";
import AUCTION_2 from "../assets/auction-2.png";
import AUCTION_3 from "../assets/auction-3.png";
import AUCTION_4 from "../assets/auction-4.png";

const AuctionCard = ({}) => {
  return (
    <div
      className="card bg-transparent text-white"
      style={{
        width: "18rem",
      }}
    >
      <img src={AUCTION_1} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="w-100 d-flex justify-content-between">
          <h5 className="card-title bg-transparent ">Lorem Ipsum</h5>
          <p className="card-text">1.20 Weth</p>
        </div>
        <hr />
        <div className="w-100 d-flex justify-content-between">
          <h5 className="card-title bg-transparent ">Lorem Ipsum</h5>
          <button
            className="btn btn-outline-light"
            style={{
              width: "100px",
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

const auctionItems = [
  {
    imageUrl: AUCTION_1,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: AUCTION_1,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: AUCTION_1,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: AUCTION_1,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
];

const Auctions = () => {
  return (
    <div className="w-100 d-flex justify-content-center flex-column align-items-center ">
      <div
        className="d-flex justify-content-between w-75"
        style={{
          height: "100px",
        }}
      >
        <h1 className="text-white">Hot auctions</h1>
        <button role="button" type="button" className="btn btn-link text-white">
          View all
        </button>
      </div>
      <div className="w-100 d-flex justify-content-evenly ">
        {auctionItems.map((items, index) => {
          return (
            <>
              <AuctionCard />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Auctions;
