import { useQuery } from '@airstack/airstack-react';
import { Spinner } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  details: any
}

const Cards: React.FC<CardProps> = ({ details }) => {
  const [reRender, setRerender] = useState(false);
  const getFuserQuery = `
query MyQuery ($Identity: [Identity!]) {
  Socials(
    input: {filter: {dappName: {_eq: farcaster}, identity: {_in: $Identity}}, blockchain: ethereum}
  ) {
    Social {
      id
      chainId
      blockchain
      dappName
      dappSlug
      dappVersion
      userId
      userAddress
      userCreatedAtBlockTimestamp
      userCreatedAtBlockNumber
      userLastUpdatedAtBlockTimestamp
      userLastUpdatedAtBlockNumber
      userHomeURL
      userRecoveryAddress
      userAssociatedAddresses
      followerCount
      followingCount
      profileBio
      profileDisplayName
      profileImage
      profileUrl
      profileName
      profileTokenId
      profileTokenAddress
      profileCreatedAtBlockTimestamp
      profileCreatedAtBlockNumber
      profileLastUpdatedAtBlockTimestamp
      profileLastUpdatedAtBlockNumber
      profileTokenUri
      isDefault
      identity
    }
  }
}
`;
  const { data: holderDetail, loading } = useQuery(getFuserQuery, { "Identity": details }, { cache: false });
  useEffect(() => {

  }, [loading])
  return (
    <div>
      {holderDetail ? <div className='grid grid-cols-4 gap-4'>
        {holderDetail?.Socials?.Social.map((item: any, index: any) => <Link to={`/new/${item.userAddress}`} key={index} className='border-2'>
          <img src={`${item.profileImage}`} className='w-96 h-48' alt="" />
          <div className='p-2'>
            <h1 ><span className='font-bold text-lg mt-1'>Name: </span>{item.profileName}</h1>
            <p className='py-2'><span className='font-bold text-lg mt-1'>Desc: </span>{item.profileBio}</p>
            <div className='flex gap-x-3'>
              <p><span className='font-bold'>Followers: </span>{item.followerCount}</p>
              <p><span className='font-bold'>Following: </span>{item.followingCount}</p>
            </div>
          </div></Link>)}
      </div> : loading ? <div className='w-fit mx-auto'> <Spinner size="lg" color="default" /></div> : <div className='text-center text-lg'><p>No Persons to match. Maybe you have no match.</p></div>}
    </div>
  );
};

export default Cards;