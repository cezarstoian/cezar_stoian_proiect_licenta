'use client';

import { User } from "@prisma/client";
import UserBox from "./UserBox";
import axios from "axios";
import toast from "react-hot-toast";

interface UserListProps {
  items: User[],
}

const UserList: React.FC<UserListProps> = ({ 
  items, 
}) => {
  // Test button
  // const callLeast = () => {
  //   const body = { name: 'fasfasttttttttttttttttttttttttt'}
  //   axios.post('/api/conversations', body)
  //   .catch(() => toast.error('Ceva nu a funcționat klan!'))
  // }

  return ( 
    <aside 
      className="
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
        block w-full left-0
      "
    >
      <div className="px-5">
        <div className="flex-col">
          <div 
            className="
              text-2xl 
              font-bold 
              text-neutral-800 
              py-4
            "
          >
            People
          </div>
        </div>
        {items.map((item) => (
          <UserBox
            key={item.id}
            data={item}
          />
        ))}
      </div>
      {/* <button onClick={() => callLeast()}>Press</button> */}
    </aside>
  );
}
export default UserList;