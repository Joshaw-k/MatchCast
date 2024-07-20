import { useQuery } from '@airstack/airstack-react';
import { Spinner } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
// import Gallery from './components/Gallery'
// import { Discover } from './components/Discover'

const Match = () => {
  const { address } = useAccount();

  console.log(address);
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

  const { data, loading, error } = useQuery(GetNFTs, { "Identity": ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"] }, { cache: false });

  console.log(data)

  useEffect(() => { }, [address, data])
  return (
    <div className='text-black max-w-7xl mx-auto p-4 min-h-[60vh]'>
      <h1 className='text-2xl font-extrabold text-center mb-8'>Choose NFT to Match</h1>
      {data ? <div className='grid grid-cols-4 gap-4'>
        {data?.base.TokenBalance.map((item: any, index: any) => {
          if (item.tokenNfts.contentValue?.image.original !== "" || item.tokenNfts.contentValue) return <Link to={`/match/${item.tokenAddress}`} key={index} className=''>
            <img src={`${item.tokenNfts.contentValue?.image.original}`} className='w-96 h-48' alt="" />
            <h1 className='font-bold text-lg'>{item.tokenNfts.metaData.name}</h1>
            <p>{item.tokenNfts.metaData.description?.slice(0, 80)}...</p>
          </Link>
        })}
      </div> : loading ? <div className='w-fit mx-auto'> <Spinner size="lg" color="default" /></div> : <div className='text-center text-lg'><p>No NFTs to match. Maybe you have no NFT.</p></div>}
    </div>
  )
}

export default Match