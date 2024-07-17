import React from 'react';
import Card from './Card';

interface NFTItem {
  id: number;
  imageSrc: string;
  title: string;
  price: string;
}

const nftData: NFTItem[] = [
  { id: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d67d94c22e5a6c7b5a49ca210484dbc585faf3edbc146671e36068fc3ca9098?apiKey=6d09e386ed084a5db605f780c970c7a9&", title: "Nature", price: "0.5 ETH" },
  { id: 2, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/185fbb2f07d4cedec671508a5527e53b112fcfb787969b13672e036b7febf7d8?apiKey=6d09e386ed084a5db605f780c970c7a9&", title: "Abstract", price: "0.5 ETH" },
  { id: 3, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/55f3d6e8025f10f661885b66880d38e5989a6d590ca508fd7cce1b9f01138ee6?apiKey=6d09e386ed084a5db605f780c970c7a9&", title: "Birds", price: "0.5 ETH" },
  { id: 4, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d43eae7dedd02fae58cb3c0947970333c7ce246eef9dd055a352f665dfd18f2?apiKey=6d09e386ed084a5db605f780c970c7a9&", title: "Old man", price: "0.5 ETH" },
  { id: 5, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd8b796cd35cca0951d79e794feeead6af37487f1b2d6daa5721c9335de8a842?apiKey=6d09e386ed084a5db605f780c970c7a9&", title: "Art", price: "0.5 ETH" },
  { id: 6, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/41395707c8ae62dc32d2f0536eac8c84f5c047666478c99d43703ede96827d94?apiKey=6d09e386ed084a5db605f780c970c7a9&", title: "Space", price: "0.5 ETH" },
  { id: 7, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5caf9c58b90512c3bf5c214bef47d570565aca1a5eab153760d0b726aafde169?apiKey=6d09e386ed084a5db605f780c970c7a9&", title: "Portrait", price: "0.5 ETH" },
  { id: 8, imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/419561a0e580cda9b1a46f8e37ce30e7bcb55774a6e9fe8df423db0826b1d2ab?apiKey=6d09e386ed084a5db605f780c970c7a9&", title: "Ethereal", price: "0.5 ETH" },
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
