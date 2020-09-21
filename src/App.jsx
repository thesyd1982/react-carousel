import React from "react";
import Carousel from "./components/carousel/carousel";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Carousel autoplay dots arrows />
    </div>
  );
}

export default App;
