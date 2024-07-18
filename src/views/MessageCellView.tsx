import { ReactElement } from "react";
import { Message, MessageAttachment } from "../model/db";
import { useAttachment } from "../hooks/useAttachment";
import { shortAddress } from "../util/shortAddress";
import { ContentTypeId, ContentTypeText } from "@xmtp/xmtp-js";
import {
  ContentTypeAttachment,
  ContentTypeRemoteAttachment,
} from "@xmtp/content-type-remote-attachment";
import { ContentTypeReply, Reply } from "@xmtp/content-type-reply";
import MessageRepliesView from "./MessageRepliesView";
import ReactionsView from "./ReactionsView";
import ReadReceiptView from "./ReadReceiptView";
import { useReplies } from "../hooks/useReplies";

function ImageAttachmentContent({
  attachment,
}: {
  attachment: MessageAttachment;
}): ReactElement {
  const objectURL = URL.createObjectURL(
    new Blob([Buffer.from(attachment.data)], {
      type: attachment.mimeType,
    })
  );

  return (
    <img
      onLoad={() => {
        window.scroll({ top: 10000, behavior: "smooth" });
      }}
      className="rounded w-48"
      src={objectURL}
      title={attachment.filename}
    />
  );
}

function AttachmentContent({ message }: { message: Message }): ReactElement {
  const attachment = useAttachment(message);

  if (!attachment) {
    return <span className="text-zinc-500">Loading attachment…</span>;
  }

  if (attachment.mimeType.startsWith("image/")) {
    return <ImageAttachmentContent attachment={attachment} />;
  }

  return (
    <span>
      {attachment.mimeType} {attachment.filename || "no filename?"}
    </span>
  );
}

export function Content({
  content,
  contentType,
}: {
  content: any;
  contentType: ContentTypeId;
}): ReactElement {
  if (ContentTypeText.sameAs(contentType)) {
    return <span className="">{content}</span>;
  }

  if (ContentTypeReply.sameAs(contentType)) {
    const reply: Reply = content;
    return <Content content={reply.content} contentType={reply.contentType} />;
  }

  return (
    <span className="text-zinc-500 break-all">
      Unknown content: {JSON.stringify(content)}
    </span>
  );
}

export function MessageContent({
  message,
}: {
  message: Message;
}): ReactElement {
  if (
    ContentTypeAttachment.sameAs(message.contentType as ContentTypeId) ||
    ContentTypeRemoteAttachment.sameAs(message.contentType as ContentTypeId)
  ) {
    return <AttachmentContent message={message} />;
  }

  return (
    <Content
      content={message.content}
      contentType={message.contentType as ContentTypeId}
    />
  );
}

export default function MessageCellView({
  message,
  readReceiptText,
}: {
  message: Message;
  readReceiptText: string | undefined;
}): ReactElement {
  const replies = useReplies(message);
  return (
    <div
      className={
        message.sentByMe
          ? "self-end flex flex-row-reverse max-w-lg px-4 py-2 rounded-lg bg-blue-600"
          : "flex self-start max-w-lg rounded-lg px-4 py-2 shadow-lg dark:bg-zinc-800"
      }
    >
      <div
        className={`${
          message.sentByMe ? "text-white" : "text-black dark:text-white"
        } space-y-1 text-xs`}
      >
        <span
          title={message.sentByMe ? "You" : message.senderAddress}
          className={
            message.sentByMe
              ? "text-gray-200 text-[10px]"
              : "text-green-500 text-[10px]"
          }
        >
          {/* {shortAddress(message.senderAddress)} */}
        </span>
        <div className={""}>
          <MessageContent message={message} />
          <div className="py-2">
            {replies.length > 0 && (
              <div className="">
                {replies.slice(-1).map((message) => (
                  <div
                    className={`${
                      message.sentByMe ? "bg-gray-200 text-black" : "bg-white"
                    } flex flex-col text-xs space-x-1 rounded-lg p-2`}
                    key={message.xmtpID}
                  >
                    <span className="text-[9px]">
                      {shortAddress(message.senderAddress)}
                    </span>
                    <MessageContent message={message} />
                  </div>
                ))}
              </div>
            )}

            {/* <ReplyComposer
        inReplyToMessage={message}
        dismiss={() => setIsShowingReplies(false)}
        replies={replies}
      /> */}
          </div>
          <div className="flex flex-row items-center gap-x-4">
            <MessageRepliesView message={message} />
            <ReactionsView message={message} />
          </div>
          <ReadReceiptView readReceiptText={readReceiptText} />
        </div>
      </div>
    </div>
  );
}
