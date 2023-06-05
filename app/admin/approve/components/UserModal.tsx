'use client';

import { User } from '@prisma/client';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import axios from "axios";
import { toast } from "react-hot-toast";

interface UserModalProps {
  user: User,
  isOpen: boolean,
  closeModal: any,
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UserModal: React.FC<UserModalProps> = ({
  user, 
  isOpen, 
  closeModal, 
}) => {

  const [isLoading, setIsLoading] = useState(false);

  const approveOrRejectUser = (user: User, approve: boolean = true) => {
    setIsLoading(true)
    const body = { user, approve }

    axios.post('/api/admin', body)
      .then(() => {
        setIsLoading(false)
        toast.success('Utilizator verificat! Puteți închide fereastra.')
      })
      .catch(() => toast.error('Ceva nu a funcționat!'))
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="User Modal"
      style={customStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <div className="flex space-x-4">
        <button onClick={() => approveOrRejectUser(user, true)} disabled={isLoading} className="px-4 py-2 bg-green-500 text-white rounded-md">Aprobă</button>
        <button onClick={() => approveOrRejectUser(user, false)} disabled={isLoading} className="px-4 py-2 bg-red-500 text-white rounded-md">Respinge</button>
        <button onClick={closeModal} disabled={isLoading} className="px-4 py-2 bg-blue-500 text-white rounded-md">X Închide fereastra</button>
      </div>
    </ReactModal>
  );
};

export default UserModal;
