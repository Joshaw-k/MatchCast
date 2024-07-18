import { ReactElement, useEffect, useState } from "react";
import { Conversation, Message } from "../model/db";
import { useMessages } from "../hooks/useMessages";
import MessageComposerView from "./MessageComposerView";
import MessageCellView from "./MessageCellView";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useLiveConversation } from "../hooks/useLiveConversation";
import ConversationSettingsView from "./ConversationSettingsView";
import { ContentTypeId } from "@xmtp/xmtp-js";
import { ContentTypeReaction } from "@xmtp/content-type-reaction";
import { useReadReceipts } from "../hooks/useReadReceipts";
import ConversationListView from "./ConversationListView";
import {
  LucideArrowLeft,
  LucideInfo,
  LucideMessageSquarePlus,
} from "lucide-react";

const appearsInMessageList = (message: Message): boolean => {
  if (ContentTypeReaction.sameAs(message.contentType as ContentTypeId)) {
    return false;
  }

  return true;
};

export default function ConversationView({
  conversation,
}: {
  conversation: Conversation;
}): ReactElement {
  const liveConversation = useLiveConversation(conversation);

  const messages = useMessages(conversation);

  const showReadReceipt = useReadReceipts(conversation);

  const [isShowingSettings, setIsShowingSettings] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 100000, behavior: "smooth" });
  }, [messages?.length]);

  return (
    <section className="flex flex-row">
      <div className="w-full max-w-xs p-2 space-y-2 bg-gray-100/60">
        <div className="font-bold text-xl py-2">Conversations</div>
        <ConversationListView />
      </div>
      <div className="flex flex-col w-full h-screen">
        <header className="sticky top-0 z-50 p-4 mb-4 bg-gray-100/80 backdrop-blur-md">
          <div className="flex justify-between items-center font-bold">
            <Link to={"/"} className="ml-2 mr-6">
              <LucideArrowLeft size={16} strokeWidth={6} color="gray" />
            </Link>
            <span className="flex-grow">
              {liveConversation?.title || conversation?.peerAddress}
            </span>
            <div className="space-x-4">
              <button
                className="inline-block space-x-1 text-zinc-600"
                onClick={() => {
                  setIsShowingSettings(!isShowingSettings);
                }}
              >
                {/* <Cog6ToothIcon className="h-4 inline-block align-top" /> */}
                {/* <span>Settings</span> */}
                <LucideInfo />
              </button>
              {/* <Link className="text-blue-700" to="/">
                Go Back
              </Link> */}
            </div>
          </div>
          {isShowingSettings && (
            <ConversationSettingsView
              conversation={conversation}
              dismiss={() => setIsShowingSettings(false)}
            />
          )}
        </header>
        <div className="flex-1 grow shrink-0 flex flex-col space-y-2 px-4 py-2 overflow-auto">
          {messages?.length == 0 && (
            <div className="h-[calc(100vh-170px)] w-full flex flex-col justify-center items-center overflow-hidden text-center">
              <LucideMessageSquarePlus
                size={64}
                strokeWidth={2}
                color={"lightgray"}
              />
              <br />
              <p className="text-gray-400">
                Your amazing conversation <br /> starts here
              </p>
            </div>
          )}
          {messages ? (
            messages.reduce((acc: ReactElement[], message: Message, index) => {
              const showRead = showReadReceipt && index === messages.length - 1;
              if (appearsInMessageList(message)) {
                acc.push(
                  <MessageCellView
                    key={message.id}
                    message={message}
                    readReceiptText={showRead ? "Read" : undefined}
                  />
                );
              }

              return acc;
            }, [] as ReactElement[])
          ) : (
            <span>Could not load messages</span>
          )}
        </div>
        <div className="grow-0">
          <MessageComposerView conversation={conversation} />
        </div>
      </div>
    </section>
  );
}
