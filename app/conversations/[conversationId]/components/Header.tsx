'use client';

import { HiArrowLeftOnRectangle } from 'react-icons/hi2'
import Link from "next/link";
import { Conversation, ConversationsOnUsers, User } from "@prisma/client";

// import useOtherUser from "@/app/hooks/useOtherUser";
// import useActiveList from "@/app/hooks/useActiveList";

// import Avatar from "@/app/components/Avatar";
// import AvatarGroup from "@/app/components/AvatarGroup";
// import ProfileDrawer from "./ProfileDrawer";

interface HeaderProps {
  conversation: Conversation & {
    users: (ConversationsOnUsers & {
      user: User
    })[]
  } | null
}

const Header: React.FC<HeaderProps> = ({ 
  conversation 
}) => {
  const dateAndTime = conversation?.createdAt.toString()
  const dateParts = dateAndTime?.split(" ");
  var formattedDateAndTime = null
  if (dateParts) {
    formattedDateAndTime = `${dateParts[2]} ${dateParts[1]} ${dateParts[3]} ${dateParts[4]}`;
  }

  return(
    <div className='w-full bg-white flx border-b-[1px] sm:px-4 lg:px-6 py-3 px-4 items-center justify-between shadow-sm'>
      <div className='flex items-center gap-4 justify-center'>
        <Link href="/conversations" className="lg:hidden block text-blue-500 hover:text-gray-600 transition cursor-pointer">
          <HiArrowLeftOnRectangle size={24} />
        </Link>
        Caz: {conversation?.name}, deschis la data de: {formattedDateAndTime}
      </div>
    </div>
  )
}
 
export default Header;
