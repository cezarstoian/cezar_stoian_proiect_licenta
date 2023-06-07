'use client';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ChakraProvider,
} from '@chakra-ui/react'
import { User } from '@prisma/client';
import { Select } from '@chakra-ui/react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useRouter } from "next/navigation";

interface UserListRoles {
  items: User[],
}

const UserTable: React.FC<UserListRoles> = ({
  items,
}) => {
  const router = useRouter()

  const [usersData, setUsersData] = useState([
    ...items
  ]);

  const handleRoleChange = (userId: string, newRole: string) => {
    setUsersData(prevUsers => prevUsers.map(user => {
      if (user.id === userId) {
        return { ...user, role: newRole };
      }
      console.log(usersData)
      return user;
    }));
  };
  
  const sendEmail = (user: User, subject: string, content: string) => {
    const body = { subject, content, user }
    axios.post('/api/mailjet', body)
    .then(() => console.log('Email trimis pentru:', user.name))
  }
  
  const changeRole = (user: User) => {
    var newRole = ''
    usersData.map((item) => {
      if(item.id === user.id) {
        newRole = item.role
      }
    })

    const subject = 'Rol modificat'
    const content = `Bună ziua, ${user?.name}! Rolul dumneavoastră a fost modificat din ${user.role} în ${newRole}. Vă mulțumim pentru înțelegere!`

    const body = { user, newRole }
    console.log(newRole)
    axios.post('/api/admin/updateRole', body)
      .then(() => {
        sendEmail(user, subject, content)
        toast.success('Rol schimbat cu succes!.')
      })
      .catch(() => toast.error('Ceva nu a funcționat!'))
      .finally(() => router.refresh())
  }

  const deleteUser = (user: User) => {
    const subject = 'Cont șters'
    const content = `Bună ziua, ${user?.name}! Contul dumneavoastră a fost șters. Vă mulțumim pentru înțelegere!`

    axios.delete(`/api/admin/${user.id}`)
      .then(() => {
        sendEmail(user, subject, content)
        toast.success('Utilizator șters cu succes!')
      })
      .catch(() => toast.error('Ceva nu a funcționat!'))
      .finally(() => router.refresh())
  }
  
  return (
    <ChakraProvider>
      <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-start bg-gray-100">
        <Table variant='striped' colorScheme='white' size='lg'>
          <Thead>
            <Tr>
              <Th>Utilizator</Th>
              <Th>Rol</Th>
              <Th>Acțiuni</Th>
            </Tr>
          </Thead>
          <Tbody>
          {items.map((item) => (
            <Tr key={item.id}>
              <Td>{item.name} ({item.email})</Td>
              <Td className="flex flex-col gap-2">
                Rol curent: {item.role}
                <Select placeholder='Selectează rolul' defaultValue={item.role} onChange={e => handleRoleChange(item.id, e.target.value)}>
                  <option value='user'>user</option>
                  <option value='contabil'>contabil</option>
                  <option value='admin'>admin</option>
                </Select>
              </Td>
              <Td>
                <button onClick={() => changeRole(item)} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md">Schimbă rolul</button>
                <button onClick={() => deleteUser(item)} className="px-4 py-2 bg-blue-500 text-white rounded-md">Șterge utilizator</button>
              </Td>
            </Tr>
          ))}
          </Tbody>
        </Table>
    </div>
    </ChakraProvider>
  )
}

export default UserTable;