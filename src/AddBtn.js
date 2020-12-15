import React from "react";
import { Link } from "@reach/router";

const AddBtn = () => {
  return (
    <div className="padding--15 width--500">
      <Link to="/addProduct">
        <h1>Click to Add Product!</h1>
      </Link>
    </div>
  );
};

export default AddBtn;
