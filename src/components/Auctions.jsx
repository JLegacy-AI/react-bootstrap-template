import React from "react";
import AUCTION_1 from "../assets/auction-1.png";
import AUCTION_2 from "../assets/auction-2.png";
import AUCTION_3 from "../assets/auction-3.png";
import AUCTION_4 from "../assets/auction-4.png";

const AuctionCard = ({ bid, item, imageUrl }) => {
  return (
    <div
      className="card bg-transparent text-white"
      style={{
        width: "18rem",
      }}
    >
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="w-100 d-flex justify-content-between">
          {item.map((i, index) => {
            return (
              <>
                <h5 className="card-title bg-transparent ">{i.name}</h5>
                <p className="card-text">{i.value}</p>
              </>
            );
          })}
        </div>
        <hr />
        <div className="w-100 d-flex justify-content-between">
          <h5
            className="bg-transparent text-secondary  fw-normal  "
            style={{
              fontSize: "12px",
            }}
          >
            {bid}
          </h5>
          <button
            className="btn btn-outline-light"
            style={{
              width: "100px",
            }}
            type="button"
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
    imageUrl: AUCTION_2,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: AUCTION_3,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: AUCTION_4,
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
        className="d-flex justify-content-between w-100 px-5"
        style={{
          height: "100px",
        }}
      >
        <h1 className="text-white">Hot auctions</h1>
        <button type="button" className="btn btn-link text-white">
          View all
        </button>
      </div>
      <div className="w-100 d-flex justify-content-evenly ">
        {auctionItems.map((items, index) => {
          return (
            <>
              <AuctionCard {...items} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Auctions;
