import React from 'react';

interface TileProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  grow?: boolean;
  verticallyCenter?: boolean;
}

function Tile(props: TileProps) {
  const {
    title, subtitle, children, fullHeight, grow, verticallyCenter
  } = props;

  return (
    <div
      className={`
      bg-white
      px-8 py-5
      shadow-md
      ${verticallyCenter ? 'flex flex-col justify-center' : ''}
      rounded-md mx-2 my-2 ${fullHeight ? 'h-full' : ''}
      ${grow ? 'grow' : ''}`}
    >
      <div className='text-gray-600 font-bold'>
        {title}
      </div>

      {subtitle && (
        <div className='text-gray-500 text-sm'>
          {subtitle}
        </div>
      )}

      {children}
    </div>
  )
}

Tile.defaultProps = {
  subtitle: '',
  fullHeight: false,
  grow: false,
  verticallyCenter: false,
};

export default Tile;
