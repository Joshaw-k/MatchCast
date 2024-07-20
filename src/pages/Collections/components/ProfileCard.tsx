import React from 'react';
import StatItem from './StatItem';
import { ProfileCardProps } from '../types';
import { Spinner } from '@nextui-org/react';

const ProfileCard: React.FC<ProfileCardProps> = ({ holderDetail, holderNFTloader }) => {
  console.log(holderDetail)
  return (
    <section className="flex flex-col grow px-9 py-12 w-full text-base bg-white shadow-xl rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      {holderDetail ? <>
        <img loading="lazy" src={holderDetail?.Socials?.Social[0].profileImage} alt={`Profile picture of ${holderDetail?.Socials?.Social[0].profileName}`} className="self-center max-w-full aspect-square w-[120px]" />
        <h2 className="self-center mt-8 text-lg font-medium text-center text-black">{holderDetail?.Socials?.Social[0].profileDisplayName}</h2>
        <p className="self-center text-base leading-9 text-center text-gray-700">{holderDetail?.Socials?.Social[0].profileName}</p>
        <h3 className="self-center mt-6 text-lg text-center text-black">Stats</h3>
        <div className="flex gap-5 justify-between mx-8 mt-3 text-sm whitespace-nowrap max-md:mx-2.5">
          <div className="text-zinc-700">Farcaster ID</div>
          <div className="font-medium text-center text-gray-700">{holderDetail?.Socials?.Social[0].userId}</div>
        </div>
        <div className="flex gap-5 justify-between mx-8 mt-3 text-sm whitespace-nowrap max-md:mx-2.5">
          <div className="text-zinc-700">Followers</div>
          <div className="font-medium text-center text-gray-700">{holderDetail?.Socials?.Social[0].followerCount}</div>
        </div>
        <div className="flex gap-5 justify-between mx-8 mt-3 text-sm whitespace-nowrap max-md:mx-2.5">
          <div className="text-zinc-700">Following</div>
          <div className="font-medium text-center text-gray-700">{holderDetail?.Socials?.Social[0].followingCount}</div>
        </div>
        <h3 className="mt-10 text-lg text-center text-black max-md:mt-10">About</h3>
        <p className="mt-4 text-sm leading-loose text-center text-gray-700">{holderDetail?.Socials?.Social[0].profileBio}</p>
        <button className="justify-center px-8 py-2 mt-7 bg-blue-500 text-white shadow-lg rounded-[32px] max-md:px-2">
          View more
        </button></> : holderNFTloader ? <div className='w-fit mx-auto'> <Spinner size="lg" color="default" /></div> : <div className='text-center text-lg'><p>Something went wrong...</p></div>}
    </section>
  );
};

export default ProfileCard;