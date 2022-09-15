import React from 'react';

function Tile() {

}


function CreateMeeting() {
  return (
    <div className="w-full h-full bg-gray-50">
      <div className="font-bold text-3xl">
        Create a new Meet
      </div>
      <div className="w-full h-14 bg-blue-100">
        <div className="h-2 w-full bg-black" />
        <div className="h-2 w-full bg-black mt-2" />
      </div>
      <div className="w-full h-10 bg-blue-200" />
      <div className="w-full h-10 bg-blue-300" />
    </div>
  );
}

export default CreateMeeting;
