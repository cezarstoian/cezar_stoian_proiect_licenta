'use client'

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

import Avatar from "@/app/components/Avatar";
import UserModal from "./UserModal";

interface UserBoxVerifyProps {
  data: User
}

const UserBoxVerify: React.FC<UserBoxVerifyProps> = ({ 
  data
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: any) => {
    setSelectedUser(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <div className="flex items-center">
        <div
          className=" 
            relative 
            flex 
            items-center 
            space-x-3 
            bg-white 
            p-3
            w-full
            rounded-lg
            transition
          "
        >
          <Avatar user={data} />
          <div className="min-w-0 flex-1">
            <div className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium text-gray-900">
                  {data.name} ({data.email})
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="border border-gray-500 rounded px-3 py-1">
          <button onClick={() => openModal(data)}>Verifică utilizatorul</button>
        </div>
        {selectedUser && (
          <UserModal
            user={selectedUser}
            isOpen={isModalOpen}
            closeModal={closeModal}
          />
        )}
      </div>
      <hr className="w-full border-gray-300 my-4" />

    </div>
  );
}
 
export default UserBoxVerify;
