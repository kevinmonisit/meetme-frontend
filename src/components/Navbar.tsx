import React from "react";

function Navbar() {
  return (
    <div
      className="
        w-full h-14 bg-gray-500 flex
        flex-row"
    >
      <div className="bg-red-500 h-full w-1/2" />
      <div className="bg-red-300 h-full w-1/2" />
    </div>
  );
}

export default Navbar;
