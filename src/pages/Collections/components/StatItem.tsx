import React from 'react';
import { StatItemProps } from '../types';

const StatItem: React.FC<StatItemProps> = ({ label, value }) => {
  return (
    <div className="flex gap-5 justify-between mx-8 mt-3 text-sm whitespace-nowrap max-md:mx-2.5">
      <div className="text-zinc-700">{label}</div>
      <div className="font-medium text-center text-gray-700">{value}</div>
    </div>
  );
};

export default StatItem;