import { ReactElement, useEffect } from "react";
import ConversationListView from "./ConversationListView";
import { Link } from "react-router-dom";
// import { NeynarAPIClient } from "@neynar/nodejs-sdk"
import { useAccount } from "wagmi";
import { useQuery } from "@airstack/airstack-react";

export default function HomeView(): ReactElement {

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

  const { data, loading, error } = useQuery(GetNFTs, { "Identity": [address] }, { cache: false });

  console.log(data)



  useEffect(() => { }, [address])
  return (
    <div className="">
      <small className="flex justify-between">
        <span>Here are your conversations:</span>
        <Link to="new" className="text-blue-700">
          Make a new one
        </Link>
      </small>
      <ConversationListView />
    </div>
  );
}
