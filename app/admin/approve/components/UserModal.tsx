'use client';

import { User } from '@prisma/client';
import React from 'react';
import ReactModal from 'react-modal';

interface UserModalProps {
  user: User,
  isOpen: boolean,
  closeModal: any,
}

const UserModal: React.FC<UserModalProps> = ({
  user, 
  isOpen, 
  closeModal, 
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="User Modal"
    >
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={closeModal}>Close Modal</button>
    </ReactModal>
  );
};

export default UserModal;
