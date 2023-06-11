'use client';

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { ConversationOnUserExtraType } from "@/app/types";

interface ConversationBoxProps {
  data: ConversationOnUserExtraType,
  selected?: boolean,
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  const session = useSession()
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.conversation.id}`)
  }, [data.conversation.id, router])

  const lastMessage = useMemo(() => {
    const messages = data.conversation.messages || []
    return messages[messages.length - 1]
  }, [data.conversation.messages])

  const lastMessageText = useMemo(() => {
    if (lastMessage?.document) return lastMessage.document

    if (lastMessage?.body) return lastMessage.body

    return 'Niciun mesaj'
  }, [lastMessage])

  return (
    <div
      onClick={handleClick}
      className={clsx(`
        w-full 
        relative 
        flex 
        items-center 
        space-x-3 
        p-3 
        hover:bg-neutral-100
        rounded-lg
        transition
        cursor-pointer
        `,
        selected ? 'bg-neutral-100' : 'bg-white'
      )}
    >
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-md font-medium text-gray-900">
              {data.conversation.name}
            </p>
            {lastMessage?.createdAt && (
              <p className="text-xs text-gray-400 font-light">
                {format(new  Date(lastMessage.createdAt), 'p')}
              </p>
            )}
          </div>
          <p className="
              truncate 
              text-sm
              "
            >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConversationBox;