import React from 'react';

export const Card = ({ children, className = '', onClick = null }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col gap-4 border border-gray-300 p-6 rounded-md bg-white hover:shadow-lg transition-shadow duration-200 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
