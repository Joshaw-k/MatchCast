import { useQuery } from '@airstack/airstack-react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
// import Gallery from './components/Gallery'
// import { Discover } from './components/Discover'

const Match = () => {
  const { address } = useAccount();

  console.log(address)

  const getFuserQuery = `
query MyQuery {
  Socials(
    input: {filter: {dappName: {_eq: farcaster}, identity: {_eq: "${address}"}}, blockchain: ethereum}
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

  const { data, loading, error } = useQuery(GetNFTs, { "Identity": ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"] }, { cache: false });

  console.log(data?.base.TokenBalance)

  useEffect(() => { }, [address, data])
  return (
    <div className='text-black max-w-7xl mx-auto p-4'>
      <div className='grid grid-cols-4 gap-4'>
        {data && data?.base.TokenBalance.map((item: any, index: any) => <Link to={`/match/${item.tokenAddress}`} key={index} className=''><img src={`${item.tokenNfts.contentValue.image.original}`} className='w-96 h-48' alt="" /></Link>)}
      </div>
    </div>
  )
}

export default Match