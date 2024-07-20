import React from 'react';
import StatItem from './StatItem';
import { ProfileCardProps } from '../types';

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, imageUrl, stats, about }) => {
  return (
    <section className="flex flex-col grow px-9 py-12 w-full text-base bg-white shadow-xl rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src={imageUrl} alt={`Profile picture of ${name}`} className="self-center max-w-full aspect-square w-[120px]" />
      <h2 className="self-center mt-8 text-lg font-medium text-center text-black">{name}</h2>
      <p className="self-center text-base leading-9 text-center text-gray-700">{title}</p>
      <h3 className="self-center mt-6 text-lg text-center text-black">Stats</h3>
      {stats.map((stat, index) => (
        <StatItem key={index} label={stat.label} value={stat.value} />
      ))}
      <h3 className="mt-10 text-lg text-center text-black max-md:mt-10">About</h3>
      <p className="mt-4 text-sm leading-loose text-center text-gray-700">{about}</p>
      <button className="justify-center self-center px-6 py-3.5 mt-12 text-base bg-white shadow-sm rounded-[32px] text-zinc-700 max-md:px-5 max-md:mt-10">
        View profile
      </button>
    </section>
  );
};

export default ProfileCard;