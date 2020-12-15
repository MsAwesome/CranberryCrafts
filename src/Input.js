import React from "react";

const Input = (props) => {
  const { id, placeholder, label } = props;
  return (
    <div className="grid grid__colm--two grid__row grid__row-gap ">
      <label id="label" className="">
        {label}
      </label>
      <input id={id} placeholder={placeholder} className=""></input>
    </div>
  );
};

export default Input;
