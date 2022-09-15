import React from 'react';

interface TileProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

function Tile(props: TileProps) {
  const { title, subtitle, children } = props;

  return (
    <div className="bg-white px-10 py-5 rounded-md m-3">
      <div className="text-gray-600 font-bold">
        {title}
      </div>

      {subtitle && (
        <div className="text-gray-500 text-sm">
          {subtitle}
        </div>
      )}

      {children}
    </div>
  )
}

Tile.defaultProps = {
  subtitle: '',
};

export default Tile;
