import React from "react";
import Input from "./Input";
import Button from "./Button";

const AddProduct = () => {
  return (
    <div id="addProd" >
      <Input
        id="productName"
        placeholder="Product Name"
        label="Product Name:"
      />
      <Input id="quantity" placeholder="Quantity" label="Quantity:" />
      <Input
        id="description"
        placeholder="Description of Product"
        label="Description:"
      />
      <Button id="submit" buttonText="Submit" />
    </div>
  );
};

export default AddProduct;
