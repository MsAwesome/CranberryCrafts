import React from "react";
import ReactDOM from "react-dom";
import AddProduct from "./AddProduct";
import HomePage from "./HomePage";
import { Router } from "@reach/router";

class App extends React.Component {
  render() {


    return (
      <div className="border padding-t--15 padding-b--15 width">
        <Router>
          <HomePage path="/" />
          <AddProduct path="/addProduct" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
