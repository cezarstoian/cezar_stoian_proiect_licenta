'use client';

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import MessageInput from "./MessageInput";
import { IoDocumentOutline } from 'react-icons/io5';
import { FaPaperPlane } from 'react-icons/fa';
import { useState } from "react";
import DocumentModal from "./DocumentModal";

const MessageSendingBox = () => {
  const { conversationId } = useConversation()
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      message: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true })
    axios.post('/api/messages', {
      ...data,
      conversationId,
    })
  }
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return(
    <div className="px-4 py-4 border-t flex bg-white gap-2 items-center w-full">
      <IoDocumentOutline size={24} onClick={() => openModal()} className="text-blue-500 hover:text-gray-600 cursor-pointer" />
      <DocumentModal
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      <form className="flex gap-2 items-center w-full" onSubmit={handleSubmit(onSubmit)}>
        <MessageInput id="message" register={register} errors={errors} required placeholder="Scrie un mesaj" />
        <button type="submit" className="rounded-xl p-2 bg-blue-500 hover:bg-gray-600 cursor-pointer">
          <FaPaperPlane size={16} className="text-white"/>
        </button>
      </form>
    </div>
  )
}

export default MessageSendingBox;