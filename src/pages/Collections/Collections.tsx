import React from 'react';
import ProfileCard from './components/ProfileCard';
import CollectionGrid from './components/CollectionGrid';

const Collections: React.FC = () => {
  const profileData = {
    name: "Alex Johnson",
    title: "Crypto Curator",
    imageUrl: "profile.png",
    stats: [
      { label: "Likes", value: "235" },
      { label: "Comments", value: "189" },
      { label: "Matches", value: "42" },
      { label: "Connections", value: "29" }
    ],
    about: "Hi there! I'm Alex, known in the NFT community as \"CryptoCurator.\" I've been passionate about blockchain technology and digital art for over five years. My journey began with Bitcoin mining, but I soon discovered the vibrant world of NFTs and never looked back."
  };

  const collectionImages = Array(6).fill("nft1.png");

  return (
    <main className="justify-center my-10 px-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
          <ProfileCard {...profileData} />
        </aside>
        <section className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="self-center text-xl font-medium text-black">My Collections</h1>
            <CollectionGrid images={collectionImages} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Collections;