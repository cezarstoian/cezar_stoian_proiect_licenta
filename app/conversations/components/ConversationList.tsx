'use client';

import useConversation from "@/app/hooks/useConversation";
import { ConversationExtraType, ConversationOnUserExtraType } from "@/app/types";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { FaExclamationCircle } from 'react-icons/fa';
import ConversationBox from "./ConversationBox";
import NewCaseModal from "./NewCaseModal";
import { pusherClient } from "@/app/libs/pusher";
import { useSession } from "next-auth/react";

interface ConversationListProps {
  initialItems: ConversationOnUserExtraType[],
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems
}) => {  
  const session = useSession();

  const [items, setItems] = useState(initialItems)

  const { conversationId, isOpen } = useConversation()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const pusherKey = useMemo(() => {
    return session.data?.user?.email
  }, [session.data?.user?.email])

  useEffect(() => {
    if (!pusherKey) {
      return
    }
    pusherClient.subscribe(pusherKey)

    const updateHandler = (conversation: ConversationExtraType) => {
      setItems((current) => current.map((currentConversation) => {
        if (currentConversation.conversationId === conversation.id) {
          currentConversation.conversation.messages.push(conversation.messages[0])
          console.log(conversation)
        }
        return currentConversation
      }));
    }

    pusherClient.bind('conversation:update', updateHandler)

    return () => {
      pusherClient.unsubscribe(pusherKey)
      pusherClient.unbind('conversation:update', updateHandler)
    }
  }, [pusherKey]);

  return (
    <aside className={clsx(`
      fixed 
      inset-y-0 
      pb-20
      lg:pb-0
      lg:left-20 
      lg:w-80 
      lg:block
      overflow-y-auto 
      border-r 
      border-gray-200 
    `, isOpen ? 'hidden' : 'block w-full left-0'
    )}>
      <div className="px-5">
        <div className="justify-between flex mb-4 pt-4">
          <div className="text-xl font-bold text-neutral-800">
            Cazuri
          </div>
          <button onClick={() => openModal()} className="flex items-center text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FaExclamationCircle className="mr-2" />
            Deschide un nou caz
          </button>
          <NewCaseModal
            isOpen={isModalOpen}
            closeModal={closeModal}
          />
        </div>
        {(items.length !== 0) ? (items.map((item) => (
          <ConversationBox 
            key={item.conversation.id}
            data={item}
            selected={conversationId === item.conversation.id}
          />
        ))) : (<div>
          Niciun caz deschis
        </div>)}
      </div>
    </aside>
  )
}

export default ConversationList;