'use client';

import useConversation from "@/app/hooks/useConversation";
import { MessageExtraType } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";

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
    bottomRef?.current?.scrollIntoView();
  }, []);

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