'use client';

import { User } from "@prisma/client";
import UserBox from "./UserBox";
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';
import IconLink from "@/app/components/IconLink";
import { useState } from "react";
import UserModal from "./UserModal";

interface UserListVerifyProps {
  items: User[],
  empty?: boolean,
}

const UserListVerify: React.FC<UserListVerifyProps> = ({ 
  items,
  empty,
}) => {

  return ( 
    <div>
      <div className="px-5 flex flex-col">
        <div className="flex-grow">
          <div 
            className="
              text-2xl 
              font-bold 
              text-neutral-800 
              py-4
            "
          >
            Persoane neverificate
          </div>
          <div 
            className="
              text-2xl 
              text-neutral-600 
              py-4
            "
            hidden={empty}
          >
            Toți utilizatorii au fost verificați
          </div>
        </div>
        {items.map((item) => (
          <UserBox
            key={item.id}
            data={item}
          />
        ))}
      </div>
      <div className="fixed bottom-0 px-5">
        <IconLink icon={HiArrowLeftOnRectangle} href={'/admin'} text={'Înapoi la pagina de administrare'} />  
      </div>
    </div>
  );
}
export default UserListVerify;