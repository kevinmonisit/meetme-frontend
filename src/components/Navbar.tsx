import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div
      className='w-full h-14 flex'
    >
      <div className='ml-10  flex items-center'>
        <div className='w-10 h-8 bg-red-800 mr-3' />
        <span className='font-semibold text-xl'>meetMe</span>
      </div>
      <div className='h-full w-1/2 flex flex-row justify-end space-x-4 ml-auto mr-2'>
        <Button text='Create a New Meet' paddingX={4} />
        <Button text='My Meets' paddingX={4} />
      </div>
    </div>
  );
}

export default Navbar;
