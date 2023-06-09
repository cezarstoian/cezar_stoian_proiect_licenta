'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  placeholder?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  id,
  type,
  register,
  errors,
  required,
  placeholder,
}) => {
  return(
    <div className="w-full relative">
      <input id={id} type={type} autoComplete={id} {...register(id, { required })} placeholder={placeholder}
      className="py-2 font-light px-4 text-black bg-neutral-200 w-full rounded-2xl focus:outline-none"
      >

      </input>
    </div>
  )
}

export default MessageInput;