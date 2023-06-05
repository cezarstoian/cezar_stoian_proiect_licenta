'use client';

import { User } from "@prisma/client";
import UserSelect from "./UserSelect";
import CalendarSelect from "./CalendarSelect";
import { useState } from "react";

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

  const sendAppointment = () => {
    // send email there
    console.log("salute")
    console.log(selectedUser)
    console.log(selectedDatetime)
  }

  // const sendAppointment = (user: User) => {
  //   // send email there
  //   console.log("salute")
  // }

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
        <button onClick={() => sendAppointment()} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md"> Programează </button>
      </div>
    </div>
  )
}

export default AppointmentForm;
