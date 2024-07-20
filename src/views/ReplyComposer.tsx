import { FormEvent, ReactElement, createRef, useRef } from "react";
import { Message } from "../model/db";
import { shortAddress } from "../util/shortAddress";
// import Button from "../components/Button";
import { sendMessage } from "../model/messages";
import { ContentTypeReply, Reply } from "@xmtp/content-type-reply";
import { ContentTypeText } from "@xmtp/xmtp-js";
import { useClient } from "../hooks/useClient";
import { findConversation } from "../model/conversations";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Divider,
} from "@nextui-org/react";
import { LucideLockKeyhole, LucideMail, LucideReply } from "lucide-react";
import { MessageContent } from "./MessageCellView";

export default function ReplyComposer({
  inReplyToMessage,
  dismiss,
  replies,
  enter,
  isShowingReplies,
}: {
  inReplyToMessage: Message;
  dismiss: () => void;
  replies: any;
  enter: () => void;
  isShowingReplies: boolean;
}): ReactElement {
  const client = useClient()!;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // We're using an uncontrolled component here because we don't need to update
  // anything as the user is typing.
  //
  // See https://react.dev/learn/manipulating-the-dom-with-refs#best-practices-for-dom-manipulation-with-refs
  const textField = createRef<HTMLInputElement>();

  async function reply(e: FormEvent) {
    e.preventDefault();

    const replyText = textField.current?.value;

    if (!replyText) {
      return;
    }

    const reply: Reply = {
      reference: inReplyToMessage.xmtpID,
      content: textField.current.value,
      contentType: ContentTypeText,
    };

    textField.current.value = "";

    const conversation = await findConversation(
      inReplyToMessage.conversationTopic
    );

    if (!conversation) {
      return;
    }

    await sendMessage(client, conversation, reply, ContentTypeReply);
  }

  return (
    <div>
      <Button
        onPress={onOpen}
        color="warning"
        variant="light"
        isIconOnly
        onClick={() => enter()}
      >
        <span
          className={`${replies.length > 0 &&
            "bg-blue-800 text-white px-1 py-0.5 rounded-full"
            } flex flex-row items-center gap-x-1.5 font-black text-[10px]`}
        >
          <LucideReply size={12} strokeWidth={4} />{" "}
          {replies.length > 0 && replies.length}
        </span>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <form className="d-block flex space-x-2" onSubmit={reply}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {replies.length > 0
                    ? "Your Replies"
                    : `Reply to ${shortAddress(
                      inReplyToMessage.senderAddress
                    )}`}
                </ModalHeader>
                <div className="py-2">
                  {replies.length > 0 && (
                    <div className="space-y-2">
                      {replies.map((message: Message) => (
                        <div
                          className={`${message.sentByMe ? "bg-gray-200 text-black" : ""
                            } flex flex-col text-xs w-[92%] space-x-1 rounded-lg p-2 mx-auto`}
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
                {replies.length > 0 && <Divider className="my-4" />}
                <ModalBody>
                  <Input
                    autoFocus
                    // className="p-2 border rounded grow-0 w-96 text-xs dark:text-black"
                    ref={textField}
                    type="text"
                    placeholder={`Reply to ${shortAddress(
                      inReplyToMessage.senderAddress
                    )}`}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={onClose}
                    onClick={() => dismiss()}
                  >
                    Close
                  </Button>
                  <Button type="submit" color="primary" onPress={onClose}>
                    Reply
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
      {/* <Input
          autoFocus
          // className="p-2 border rounded grow-0 w-96 text-xs dark:text-black"
          ref={textField}
          type="text"
          placeholder={`Reply to ${shortAddress(
            inReplyToMessage.senderAddress
          )}`}
        /> */}

      {/* <Button type="submit" color="primary" size="sm">
          Reply
        </Button> */}
      {/* <button onClick={() => dismiss()} className="text-xs text-gray-500">
          Cancel
        </button> */}
    </div>
  );
}
