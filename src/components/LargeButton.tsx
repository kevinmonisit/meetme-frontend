import React from 'react';

interface LargeButtonProps {
  text: string;
}

function LargeButton(props: LargeButtonProps) {
  return (
    <button
      className="text-center w-full p-3
      rounded-lg bg-red-500 text-white font-bold
      hover:bg-red-600 transition-colors duration-200
      my-4"
    >
      {props.text}
    </button>
  );
}

export default LargeButton;
