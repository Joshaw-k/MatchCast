import React, { useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import CollectionGrid from './components/CollectionGrid';
import { useQuery } from '@airstack/airstack-react';
import { useAccount } from 'wagmi';

const Collections: React.FC = () => {
  const { address } = useAccount();
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
  const { data: holderDetail, loading: holderNFTloader } = useQuery(getFuserQuery, { "Identity": address }, { cache: false });
  useEffect(() => {

  }, [holderNFTloader])

  const GetNFTs = `query GetNFTs($Identity: [Identity!]) {
  ethereum: TokenBalances(
    input: {
      filter: {
        owner: { _in: $Identity }
        tokenType: { _in: [ERC1155, ERC721] }
      }
      blockchain: ethereum
      limit: 50
    }
  ) {
    TokenBalance {
      tokenAddress
      amount
      formattedAmount
      tokenType
      tokenNfts {
        address
        tokenId
        blockchain
        contentValue {
          image {
            original
          }
        }
      }
    }
    pageInfo {
      nextCursor
      prevCursor
      hasNextPage
      hasPrevPage
    }
  }
  base: TokenBalances(
    input: {
      filter: {
        owner: { _in: $Identity }
        tokenType: { _in: [ERC1155, ERC721] }
      }
      blockchain: base
      limit: 50
    }
  ) {
    TokenBalance {
      tokenAddress
      amount
      formattedAmount
      tokenType
      tokenNfts {
        address
        metaData {
        name
        description
        }
        tokenId
        blockchain
        contentValue {
          image {
            original
          }
        }
      }
    }
    pageInfo {
      nextCursor
      prevCursor
      hasNextPage
      hasPrevPage
    }
  }
}`

  const { data: holderNFTs, loading: holderloader, error } = useQuery(GetNFTs, { "Identity": [address] }, { cache: false });

  useEffect(() => { }, [holderNFTs, address])

  return (
    <main className="justify-center my-10 px-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
          <ProfileCard holderDetail={holderDetail} holderNFTloader={holderNFTloader} />
        </aside>
        <section className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="self-center text-xl font-medium text-black">My Collections</h1>
            <CollectionGrid holderNFTs={holderNFTs} holderloader={holderloader} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Collections;