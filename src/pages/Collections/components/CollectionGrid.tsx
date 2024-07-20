import React from 'react';
import { CollectionGridProps } from '../types';

const CollectionGrid: React.FC<CollectionGridProps> = ({ images }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center content-center px-5 pt-8 pb-7 mt-8 border-t border-gray-400 border-solid max-md:px-5 max-md:max-w-full">
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col w-1/4 m-auto max-md:ml-0 max-md:w-full">
                <img loading="lazy" src={image} alt="" className="w-full aspect-square max-md:mt-10" />
              </div>
            ))}
          </div>
        </div>
      <button className="self-center mt-16 text-lg font-medium text-blue-500 max-md:mt-10">
        See more
      </button>
    </div>
  );
};

export default CollectionGrid;