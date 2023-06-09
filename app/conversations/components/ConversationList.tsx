'use client';

import useConversation from "@/app/hooks/useConversation";
import { ConversationOnUserExtraType } from "@/app/types";
import { Conversation } from "@prisma/client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaExclamationCircle } from 'react-icons/fa';
import ConversationBox from "./ConversationBox";
// import saveAs from "file-saver";
// import axios from "axios";

interface ConversationListProps {
  initialItems: ConversationOnUserExtraType[],
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems
}) => {
  //   const handleDownloadButtonClick = async (filename: string) => {
  //   try {
  //     axios.get(`/api/aws/${filename}`)
  //   } catch (err) {
  //     console.error('Error downloading file from S3:', err);
  //   }
  // }
  const [items, setItems] = useState(initialItems)

  const router = useRouter()

  const { conversationId, isOpen } = useConversation()

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
          <button className="flex items-center text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FaExclamationCircle className="mr-2" />
            Deschide un nou caz 
          </button>
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
      {/* <button onClick={() => handleDownloadButtonClick('logo.png')}>Press</button> */}
    </aside>
  )
}

export default ConversationList;