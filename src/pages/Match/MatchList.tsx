import { useQuery } from '@airstack/airstack-react';
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi';
// import Gallery from './components/Gallery'
// import { Discover } from './components/Discover'
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Spinner } from '@nextui-org/react';
import Cards from './components/Cards';


const MatchList = () => {
    const { address } = useAccount();
    const [details, setDetails] = useState(null);
    const searchParams = useParams()

    const GetNFTHolders = `query GetNFTHoldersAndImages($address: [Address!]) {
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

    const { data: holderData } = useQuery(GetNFTHolders, { "address": ["0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03"] }, { cache: false });

    useEffect(() => {
        if (holderData) {
            const details = holderData?.ethereum.TokenNft.map((item: any, index: any) => item.tokenBalances?.[0].owner.identity)
            setDetails(details)
        }
    }, [address, holderData])
    return (
        <div className='text-black max-w-7xl mx-auto p-4 min-h-[60vh]'>
            <h1 className='text-2xl font-extrabold text-center my-8'>Choose Person to Match</h1>
            {details && <Cards details={details} />}
        </div>
    )
}

export default MatchList