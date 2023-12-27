// Loader.js

import React from "react";
import loading from "./loader.svg";  // Use the correct name

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
        <img src={loading} className="animate-spin h-6 w-6 text-white" alt="" />
      {/* <Loading  /> */}
      <span className="ml-2 text-white">Loading...</span>
    </div>
  );
};

export default Loader;
