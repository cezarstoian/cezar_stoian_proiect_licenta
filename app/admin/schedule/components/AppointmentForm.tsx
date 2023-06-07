'use client';

import { User } from "@prisma/client";
import UserSelect from "./UserSelect";
import CalendarSelect from "./CalendarSelect";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


interface UserListRoles {
  users: User[],
}

const AppointmentForm: React.FC<UserListRoles> = ({
  users,
}) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedDatetime, setSelectedDatetime] = useState('');

  const handleSelectedUser = (data: any) => {
    setSelectedUser(data)
  }

  const handleSelectedDatetime = (data: any) => {
    setSelectedDatetime(data)
  }

  const sendAppointment = (selectedUser: string, selectedDatetime: string) => {
    var user: User | null = null
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === selectedUser) user = users[i]
    }
    const subject = 'Ședință programată'
    const content = `Bună ziua, ${user?.name}! A fost stabilită o întâlnire la sediul firmei la data/ora: ${selectedDatetime}. Vă mulțumim pentru înțelegere!`
    const body = { subject, content, user }

    axios.post('/api/mailjet', body)
    .then(() => console.log('Email trimis catre:', user?.name))
    .catch(() => toast.error('Ceva nu a funcționat!'))
    .finally(() => toast.success('Ședință programată.'))
  }

  return (
    <div className="
      flex
      flex-col 
      min-h-full
      py-12 
      sm:px-6  
      lg:px-8 
      bg-gray-100
      gap-3
    ">
      Programează o întâlnire
      <div className="flex flex-col gap-5">
        <UserSelect users={users} onData={handleSelectedUser} />
        <CalendarSelect onData={handleSelectedDatetime} />
        <button onClick={() => sendAppointment(selectedUser, selectedDatetime)} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md"> Programează </button>
      </div>
    </div>
  )
}

export default AppointmentForm;
