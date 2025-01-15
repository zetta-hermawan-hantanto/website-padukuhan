'use client';
import React from 'react';

const Tag = ({ name }: { name: string }) => {
  return (
    <div className="bg-opacity-30 bg-white rounded-full px-6 py-2 max-sm:px-3 max-sm:py-1 flex items-center justify-center">
      <span className="max-sm:text-[10px] drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">#{name}</span>
    </div>
  );
};

export default Tag;
