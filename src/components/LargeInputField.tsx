import React from 'react';

interface LargeInputFieldProps {
  label: string;
}

function LargeInputField(props: LargeInputFieldProps) {
  const { label } = props;
  return (<div>
    <div className='text-gray-600 font-bold'>
      {label}
    </div>
  </div>);
};

export default LargeInputField;
