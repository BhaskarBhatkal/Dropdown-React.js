import React from "react";
import Dropdown from "./Dropdown";

const App = () => {
  const items = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="h-screen flex justify-center items-center">
      <Dropdown items={items} />
    </div>
  );
};

export default App;
