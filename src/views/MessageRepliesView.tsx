import { ReactElement, useState } from "react";
import { Message } from "../model/db";
import { useReplies } from "../hooks/useReplies";
import ReplyComposer from "./ReplyComposer";
import { MessageContent } from "./MessageCellView";
import { shortAddress } from "../util/shortAddress";
import { LucideLockKeyhole, LucideMail, LucideReply } from "lucide-react";

export default function MessageRepliesView({
  message,
}: {
  message: Message;
}): ReactElement {
  const replies = useReplies(message);

  const [isShowingReplies, setIsShowingReplies] = useState(false);

  return (
    <div className="flex flex-col">
      {/* {isShowingReplies && (
        <div className="py-2">
          {replies.length > 0 && (
            <div className="">
              {replies.map((message) => (
                <div
                  className={`${
                    message.sentByMe ? "bg-white text-black" : ""
                  } flex flex-col text-xs space-x-1 rounded-lg p-2`}
                  key={message.xmtpID}
                >
                  <span className="text-[9px]">
                    {shortAddress(message.senderAddress)}:
                  </span>
                  <MessageContent message={message} />
                </div>
              ))}
            </div>
          )}
        </div>
      )} */}
      <div className="flex">
        <ReplyComposer
          inReplyToMessage={message}
          dismiss={() => setIsShowingReplies(false)}
          replies={replies}
          enter={() => setIsShowingReplies(true)}
          isShowingReplies={isShowingReplies}
        />
        {/* <button
        className={
          message.sentByMe
            ? "text-amber-300 text-[9px]"
            : "text-blue-600 text-[9px]"
        }
        onClick={() => setIsShowingReplies(true)}
      >
        <span
          className={`${
            replies.length > 0 &&
            "bg-blue-800 text-white px-1 py-0.5 rounded-full"
          } flex flex-row items-center gap-x-1.5 font-black text-[10px]`}
        >
          <LucideReply size={12} strokeWidth={4} />{" "}
          {replies.length > 0 && replies.length}
        </span>
        {replies.length == 0
          ? "Reply"
          : `repl${replies.length == 1 ? "y" : "ies"} ${replies.length} `}
      </button> */}
      </div>
    </div>
  );
}
