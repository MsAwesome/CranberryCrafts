import React from "react";

const Button = (props) => {
  const { id, buttonText } = props;
  return (
    <button id={id} className="">
      {buttonText}
    </button>
  );
};

export default Button;
