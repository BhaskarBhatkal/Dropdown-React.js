import React from "react";
import Dropdown from "./Dropdown";

const App = () => {
  const items = ["React.js ", "Angular.js", "Vue.js"];

  return (
    <div className="h-screen flex justify-center items-center">
      <Dropdown items={items} />
    </div>
  );
};

export default App;
