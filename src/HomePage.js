import React from "react";
import AddBtn from "./AddBtn";
import Table from "./Table";


class HomePage extends React.Component {
  
  render() {

    const productList = [
      {
        name: "Wood Door Hander",
        quantity: 5,
      },
      {
        name: "Fluid Pour",
        quantity: 15,
      },
      {
        name: "Wooden Holiday Signs",
        quantity: 3,
      },
      {
        name: "Resin Geodes",
        quantity: 0,
      },
    ];

    return (
      <div className="grid">
        <AddBtn />
        <br/>
  
        <div className="table padding--15" >
          <Table tableData={productList}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
