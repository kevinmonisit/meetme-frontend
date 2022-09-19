import React from 'react';

interface TileProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  grow?: boolean;

}

function Tile(props: TileProps) {
  const {
    title, subtitle, children, fullHeight, grow,
  } = props;

  return (
    <div
      className={`
      bg-white
      px-10 py-5
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
};

export default Tile;
