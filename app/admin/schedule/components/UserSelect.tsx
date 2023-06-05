'use client';

import {
  ChakraProvider, FormControl, FormLabel,
} from '@chakra-ui/react'
import { User } from '@prisma/client';
import { Select } from '@chakra-ui/react'
import { useState } from 'react';

interface UserSelectList {
  users: User[],
  onData: any,
}

const UserSelect: React.FC<UserSelectList> = ({
  users,
  onData,
}) => {
  const [selectedUser, setSelectedUser] = useState(users[0].id);
  onData(selectedUser)

  const handleUserSelect = (event: any) => {
    const selectedUserId = event.target.value;
    setSelectedUser(selectedUserId);
    onData(selectedUser)
  };
  
  return (
    <ChakraProvider>
      <FormControl>
        <FormLabel>Selectează utilizatorul ce urmează a fi programat</FormLabel>
        <Select onChange={handleUserSelect}>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.email}) - ID: {user.id}
            </option>
          ))}
        </Select>
      </FormControl>
    </ChakraProvider>
  )
}

export default UserSelect;