import { ReactElement } from "react";
import { Conversation, Message } from "../model/db";
import { shortAddress, shortenChatContent } from "../util/shortAddress";
import ReactTimeAgo from "react-time-ago";
import { MessageContent } from "./MessageCellView";
import { useLocation } from "react-router-dom";

export default function ConversationCellView({
  conversation,
  latestMessage,
}: {
  conversation: Conversation;
  latestMessage: Message | undefined;
}): ReactElement {
  const location = useLocation();
  const pathnameTopic = location.pathname.split("/")[2] ?? location.pathname;

  return (
    <div
      className={`${
        conversation?.topic === pathnameTopic
          ? "bg-blue-600"
          : "bg-gray-200 hover:bg-gray-300 hover:dark:bg-zinc-700/80 dark:bg-zinc-800/50"
      }  mt-2 p-2 rounded-lg transition`}
    >
      <div className="relative flex flex-row items-center justify-between space-x-2 w-full">
        <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
          <span
            className={`${
              conversation?.topic === pathnameTopic
                ? "text-amber-300 font-bold"
                : "text-amber-600 dark:text-amber-500"
            } w-full text-[10px]`}
          >
            {conversation.title || conversation.peerAddress}
          </span>{" "}
        </div>
        <div
          className={`${
            conversation?.topic === pathnameTopic ? "" : "text-zinc-500"
          } absolute -top-1.5 right-0 text-[8px]`}
        >
          <ReactTimeAgo date={conversation.updatedAt} />
        </div>
      </div>
      {latestMessage ? (
        <div
          className={`${
            conversation?.topic === pathnameTopic
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
          className={`${
            conversation?.topic === pathnameTopic
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
