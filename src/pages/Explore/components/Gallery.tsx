import React from 'react';
import Card from './Card';

interface NFTItem {
  id: number;
  imageSrc: string;
  title: string;
  price: string;
}

const nftData: NFTItem[] = [
  { id: 1, imageSrc: "nft1.png", title: "Nature", price: "0.5 ETH" },
  { id: 2, imageSrc: "nft2.png", title: "Abstract", price: "0.5 ETH" },
  { id: 3, imageSrc: "nft3.png", title: "Birds", price: "0.5 ETH" },
  { id: 4, imageSrc: "nft4.png", title: "Old man", price: "0.5 ETH" },
  { id: 5, imageSrc: "nft5.png", title: "Art", price: "0.5 ETH" },
  { id: 6, imageSrc: "nft6.png", title: "Space", price: "0.5 ETH" },
  { id: 7, imageSrc: "nft7.png", title: "Portrait", price: "0.5 ETH" },
  { id: 8, imageSrc: "nft8.png", title: "Ethereal", price: "0.5 ETH" },
];

const Gallery: React.FC = () => {
  return (
    <main className="flex flex-col flex-wrap justify-center content-center">
      <section className="px-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {nftData.slice(0, 4).map((nft) => (
            <div key={nft.id} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <Card imageSrc={nft.imageSrc} title={nft.title} price={nft.price} />
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {nftData.slice(4).map((nft) => (
            <div key={nft.id} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <Card imageSrc={nft.imageSrc} title={nft.title} price={nft.price} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
