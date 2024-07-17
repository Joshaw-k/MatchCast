import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, price }) => {
  return (
    <article className="flex flex-col grow justify-center max-md:mt-10">
      <img loading="lazy" src={imageSrc} alt={`${title} NFT`} className="w-full aspect-[1.35]" />
      <div className="flex justify-between align-top mt-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-black">{title}</h3>
          <p className="text-sm text-gray-700">{price}</p>
        </div>
        <button className="justify-center px-3 py-1 my-auto text-sm text-white whitespace-nowrap bg-blue-500 rounded-xl shadow-sm max-md:px-5">
          View
        </button>
      </div>
    </article>
  );
};

export default Card;