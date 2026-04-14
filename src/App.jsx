import { Component } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import "./commonResource/style.css";

class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <FoodList />
      </div>
    );
  }
}

export default App;
