import { useQuery } from '@airstack/airstack-react';
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi';
// import Gallery from './components/Gallery'
// import { Discover } from './components/Discover'
import { Link, useParams, useSearchParams } from 'react-router-dom';


const MatchList = () => {
    const { address } = useAccount();
    const [dd, setD] = useState(null);
    const searchParams = useParams()

    console.log(searchParams)

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

    const GetNFTs = `query GetNFTHoldersAndImages($address: [Address!]) {
  ethereum: TokenNfts(
    input: { filter: { address: { _in: $address } }, blockchain: ethereum }
  ) {
    TokenNft {
      address
      tokenId
      contentValue {
        image {
          extraSmall
          small
          medium
          large
          original
        }
      }
      tokenBalances {
        owner {
          domains {
            name
            isPrimary
          }
          identity
          socials {
            profileName
            dappName
          }
        }
      }
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
}`

    const { data, loading, error } = useQuery(GetNFTs, { "address": ["0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03"] }, { cache: false });

    const { data: ds } = useQuery(getFuserQuery, { "Identity": dd }, { cache: false });

    console.log(data)
    console.log(ds)

    useEffect(() => {
        if (data) {
            const d = data?.ethereum.TokenNft.map((item: any, index: any) => item.tokenBalances?.[0].owner.identity)
            setD(d)
        }
    }, [address, data])
    useEffect(() => {
        console.log(dd)
    }, [dd])
    return (
        <div className='text-black max-w-7xl mx-auto p-4'>
            <div className='grid grid-cols-4 gap-4'>
                {ds && ds?.Socials?.Social.map((item: any, index: any) => <Link to={`/new/${item.userAddress}`} key={index} className=''><img src={`${item.profileImage}`} className='w-96 h-48' alt="" /></Link>)}
            </div>
        </div>
    )
}

export default MatchList