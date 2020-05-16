import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TabMenu from "./components/TabMenu.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabMenu items={[
            {
              src: "https://image.flaticon.com/icons/svg/846/846449.svg",
              label: "Home"
            },
            {
              src: "https://image.flaticon.com/icons/svg/2089/2089181.svg",
              label: "message"
            }
          ]} />
      </div>
    );
  }
}

export default App;
