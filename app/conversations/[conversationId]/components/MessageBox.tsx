'use client';

import clsx from "clsx";
import { useState } from "react";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { FiDownload } from 'react-icons/fi';
import Avatar from "@/app/components/Avatar";
import { MessageExtraType } from "@/app/types";
import { toast } from "react-hot-toast";
import saveAs from "file-saver";

interface MessageBoxProps {
  data: MessageExtraType;
  isLast?: boolean;
  conversationId: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({ 
  data, 
  isLast,
  conversationId,
}) => {
  const session = useSession()

  const isOwnMessage = session.data?.user?.email === data?.sender?.email

  const container = clsx("flex gap-3 p-4", isOwnMessage && "justify-end")
  const avatar = clsx(isOwnMessage && "order-2")
  const body = clsx("flex flex-col gap-2", isOwnMessage && "items-end")
  const message = clsx(
    "text-sm w-fit overflow-hidden rounded-xl py-2 px-3", 
    isOwnMessage ? "bg-blue-500 text-white" : "bg-gray-100",
  )

  const downloadFile = (filename: string) => {
    try {
      const fileUrl = `https://licenta-cezar.s3.eu-west-1.amazonaws.com/${filename}`
  
      saveAs(fileUrl, filename)
  
      return toast.success('Fișier descărcat cu succes')
    } catch (err) {
      return toast.error('Ceva nu a funcționat!')
    }
  }

  return ( 
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-700">
            {data.sender.name}
          </div>
          <div className="text-xs text-gray-500">
            {format(new Date(data.createdAt), 'p')}
          </div>
        </div>
        <div className={message}>
          {data.document ? (
            <div onClick={() => downloadFile(`${conversationId}_${data.document}`)} className="cursor-pointer flex gap-2">
              {data.document}
              <FiDownload />
            </div>
          ) : (
            <div>{data.body}</div>
          )}
        </div>
      </div>
    </div>
   );
}
 
export default MessageBox;
