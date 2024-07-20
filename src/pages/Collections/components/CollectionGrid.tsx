import React from 'react';
import { CollectionGridProps } from '../types';
import { Spinner } from '@nextui-org/react';

const CollectionGrid: React.FC<CollectionGridProps> = ({ holderNFTs, holderloader }) => {
  console.log(holderNFTs)
  return (
    <div className="flex flex-col flex-wrap justify-center content-center px-5 pt-8 pb-7 mt-8 border-t border-gray-400 border-solid max-md:px-5 max-md:max-w-full">
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0">
          {holderNFTs ? holderNFTs?.base.TokenBalance.map((item: any, index: any) => {
            if (item.tokenNfts.contentValue?.image.original !== "" || item.tokenNfts.contentValue) return <div key={index} className="flex flex-col w-1/4 m-auto max-md:ml-0 max-md:w-full">
              <img loading="lazy" src={item.tokenNfts.contentValue?.image.original} alt="" className="w-full aspect-square max-md:mt-10" />
              <h1 className='font-bold text-lg'>{item.tokenNfts.metaData.name}</h1>
              <p>{item.tokenNfts.metaData.description?.slice(0, 80)}...</p>
            </div>
          }) : holderloader ? <div className='w-fit mx-auto'> <Spinner size="lg" color="default" /></div> : <div className='text-center text-lg'><p>No NFTs retrieved. Maybe you have no NFT.</p></div>}
        </div>
      </div>
      <button className="self-center mt-16 text-lg font-medium text-blue-500 max-md:mt-10">
        See more
      </button>
    </div>
  );
};

export default CollectionGrid;