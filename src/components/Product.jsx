import React from "react";
// import Myproduct from "../product.JSON";

function Product() {
  console.log("hello");
  // const data = require("../product.JSON");
  return (
    <div className="Product">
      <section className="products">
        {Myproduct.products.map((product) => (
          <div className="shoe-wrapper">
            <div className="shoe-container">
              <div>{product.title}</div>
              <img className="shoe-image" src={product.img} />
              <p className="shoe-description">{product.description}</p>
              <div className="shoe-price">{product.price}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
const Myproduct = {
  products: [
    {
      key: 1,
      title: "AdidasX",
      img: "./images/AdidasX.jpg",
      description: "The hero shoot cleat with soft feel",
      price: "$180",
    },
    {
      key: 2,
      title: "Copa",
      img: "./images/Copa.jpg",
      description: " water proof stretcher cleat for all seasons",
      price: "$200",
    },
    {
      key: 3,
      title: "fisher",
      img: "./images/fisher.jpg",
      description: " water proof stretcher cleat for all seasons",
      price: "$200",
    },
    {
      key: 4,
      title: "Mercurial",
      img: "./images/Mercurial.jpg",
      description: "The hero shoot cleat with soft feel",
      price: "$600",
    },
    {
      key: 5,
      title: "Future",
      img: "./images/Future.jpg",
      description: "The hero shoot cleat with soft feel",
      price: "$270",
    },
    {
      key: 6,
      title: "Phantom",
      img: "./images/Phantom.jpg",
      description:
        "They are made with premium leather and are precision designed to give great command of the ball.",
      price: "$270",
    },
    {
      key: 7,
      title: "PhantomGT",
      img: "./images/PhantomGT.jpg",
      description:
        " These cleats are designed to help you unleash your inner speed-demon.",
      price: "$370",
    },
    {
      key: 8,
      title: "Fisher",
      img: "./images/fisher.jpg",
      description: "The heat bender",
      price: "$230",
    },
    {
      key: 9,
      title: "Predator",
      img: "./images/Predator.jpg",
      description:
        " Everything about these boots gives you the leading advantage in ball control ",
      price: "$400",
    },
    {
      key: 10,
      title: "Superfly",
      img: "./images/Superfly.jpg",
      description:
        "The player with powerful shooting ability will also benefit from the sturdy footing provided by these boots.",
      price: "410",
    },
    {
      key: 11,
      title: "Pulse",
      img: "./images/Pulse.jpg",
      description:
        "If you are an agile, disruptive player, these boots were designed with you in mind.",
      price: "$160",
    },
    {
      key: 12,
      title: "Ultra",
      img: "./images/Ultra.jpg",
      description: "If you’re looking to up your game with some fancy footwork",
      price: "$600",
    },
    {
      key: 13,
      title: "LattoBlack",
      img: "./images/lattoBlack.jpeg",
      description: "Controlskin for maximum ball control in any weather.",
      price: "$190",
    },
    {
      key: 14,
      title: "SharpShooter",
      img: "./images/sharp-shooter.jpeg",
      description:
        "The rubber sole plate is less taxing on joints, making artificial turf shoes more comfortable for older players.",
      price: "$170",
    },
    {
      key: 15,
      title: "Vision-elite",
      img: "./images/vision-elite.jpeg",
      description: "The defenders favorites",
      price: "$120",
    },
  ],
};

export default Product;
