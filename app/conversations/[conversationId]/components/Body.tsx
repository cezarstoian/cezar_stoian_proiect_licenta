'use client';

import useConversation from "@/app/hooks/useConversation";
import { MessageExtraType } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import { find } from "lodash";
import { pusherClient } from "@/app/libs/pusher";

interface BodyProps {
  initialMessages: MessageExtraType[]
}

const Body: React.FC<BodyProps> = ({
  initialMessages
}) => {
  const [messages, setMessages] = useState(initialMessages)
  const bottomRef = useRef<HTMLDivElement>(null)

  const {conversationId} = useConversation()

  useEffect(() => {
    pusherClient.subscribe(conversationId)
    bottomRef?.current?.scrollIntoView()

    const messageHandler = (message: MessageExtraType) => {
      setMessages((current) => {
        if (find(current, { id: message.id })) {
          return current;
        }

        return [...current, message]
      });
      
      bottomRef?.current?.scrollIntoView();
    };

    pusherClient.bind('messages:new', messageHandler)

    return () => {
      pusherClient.unsubscribe(conversationId)
      pusherClient.unbind('messages:new', messageHandler)
    }
  }, [conversationId]);

  return(
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox isLast={i === messages.length-1} key={message.id} data={message} conversationId={conversationId} />
      ))}
      <div ref={bottomRef} className="pt-24"/>
    </div>
  )
}

export default Body;