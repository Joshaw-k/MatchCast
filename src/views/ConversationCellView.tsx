import { ReactElement, useEffect } from "react";
import { Conversation, Message } from "../model/db";
import { shortAddress, shortenChatContent } from "../util/shortAddress";
import ReactTimeAgo from "react-time-ago";
import { MessageContent } from "./MessageCellView";
import { useLocation } from "react-router-dom";
import { useQuery } from "@airstack/airstack-react";

export default function ConversationCellView({
  conversation,
  latestMessage,
}: {
  conversation: Conversation;
  latestMessage: Message | undefined;
}): ReactElement {
  const location = useLocation();
  const pathnameTopic = location.pathname.split("/")[2] ?? location.pathname;

  console.log(conversation)

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

  const { data } = useQuery(getFuserQuery, { "Identity": [conversation.peerAddress] }, { cache: false });

  console.log(data)

  useEffect(() => { }, [data])

  return (
    <div
      className={`${conversation?.topic === pathnameTopic
        ? "bg-blue-600"
        : "bg-gray-200 hover:bg-gray-300 hover:dark:bg-zinc-700/80 dark:bg-zinc-800/50"
        }  mt-2 p-2 rounded-lg transition`}
    >
      <div className="relative flex flex-row items-center justify-between space-x-2 w-full">
        <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
          <div
            className={`${conversation?.topic === pathnameTopic
              ? "text-amber-300 font-bold"
              : "text-amber-600 dark:text-amber-500"
              } w-full text-[10px]`}
          >
            {data ? data?.Socials?.Social ? data?.Socials?.Social.map((item: any, index: any) => <div key={index} className='flex items-center gap-x-1'><img src={`${item.profileImage}`} className="w-5 rounded-full" alt="" /><>{item.profileName}</></div>) : conversation.peerAddress : conversation.peerAddress}
          </div>{" "}
        </div>
        <div
          className={`${conversation?.topic === pathnameTopic ? "" : "text-zinc-500"
            } absolute -top-1.5 right-0 text-[8px]`}
        >
          <ReactTimeAgo date={conversation.updatedAt} />
        </div>
      </div>
      {latestMessage ? (
        <div
          className={`${conversation?.topic === pathnameTopic
            ? "text-white"
            : "text-zinc-500"
            } block text-xs text-ellipsis overflow-hidden whitespace-nowrap`}
        >
          {typeof latestMessage?.content === "string"
            ? shortenChatContent(latestMessage?.content)
            : latestMessage?.content?.content}
        </div>
      ) : (
        <div
          className={`${conversation?.topic === pathnameTopic
            ? "text-white"
            : "text-zinc-500"
            } block text-xs`}
        >
          No messages yet.
        </div>
      )}
    </div>
  );
}
