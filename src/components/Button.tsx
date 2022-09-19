import React from 'react';

interface ButtonProps {
  text: string;
  paddingX?: 1 | 2 | 4;
  paddingY?: 1 | 2 | 4;
  red?: boolean;
  fullWidth?: boolean;
}

function getPaddingX(value: 1 | 2 | 4 | undefined) {
  switch (value) {
    case 1:
      return 'px-1';
    case 2:
      return 'px-2';
    case 4:
      return 'px-4';
    default:
      return '';
  }
}

function getPaddingY(value: 1 | 2 | 4 | undefined) {
  switch (value) {
    case 1:
      return 'py-1';
    case 2:
      return 'py-2';
    case 4:
      return 'py-4';
    default:
      return '';
  }
}


function Button(props: ButtonProps) {
  const { text, paddingX, paddingY, red, fullWidth } = props;

  return (
    <button
      type='button'
      className={`
      ${red ? 'bg-red-500' : 'bg-white'}
      ${red ? 'text-white' : 'text-gray-600'}
      ${red ? 'border-red-500' : 'border-gray-400'}
      ${red ? 'hover:bg-red-600' : 'hover:bg-gray-200'}
      ${getPaddingX(paddingX)}
      ${getPaddingY(paddingY)}
      ${fullWidth ? 'w-full' : ''}
      text-center
      rounded-lg font-normal text-sm
      transition-colors duration-200
      my-2 border`}
    >
      {text}
    </button>
  );
}


Button.defaultProps = {
  paddingX: 2,
  paddingY: 2,
  red: false,
  fullWidth: false,
};

export default Button;
