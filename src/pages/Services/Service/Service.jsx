import React from "react";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-8">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ml-2">
        <h2 className="card-title">{title}</h2>
        <p className="text-purple-700">Price : ${price}</p>
        <div>
          <Link to={`/checkOut/${_id}`}>
            <button className="btn btn-primary w-full">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
