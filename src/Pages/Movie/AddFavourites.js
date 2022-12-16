import React from "react";
import { FaHeart } from "react-icons/fa";
import "./AddFavourite.css";

const AddFavourite = () => {
  return (
    <div className="addToFavorite-section">
      <h1>Add to Wishlist</h1>
      <li>
        <FaHeart />
      </li>
    </div>
  );
};

export default AddFavourite;
