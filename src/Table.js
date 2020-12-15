import React from "react";
import { render } from "react-dom";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name of Product</th>
        <th>Quantity</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.productData.tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.quantity}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends React.Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody productData={this.props} />
      </table>
    );
  }
}

export default Table;
