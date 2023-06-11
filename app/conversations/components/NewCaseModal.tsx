'use client';

import React, { useState } from 'react';
import ReactModal from 'react-modal';
import axios from "axios";
import { toast } from "react-hot-toast";
import { ChakraProvider, Input } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

interface NewCaseModalProps {
  isOpen: boolean;
  closeModal: any;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: 'auto',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

const NewCaseModal: React.FC<NewCaseModalProps> = ({
  isOpen, 
  closeModal,
}) => {
  const router = useRouter();

  const [caseName, setCaseName] = useState('')

  const openNewCase = (name: string) => {
    setCaseName(name.trim())
    if (!name) toast.error('Introduceți un nume pentru caz!')
    else {
      console.log(name)
      const body = { name }
      axios.post('/api/conversations', body)
      .then(() => toast.success('Caz deschis!'))
      .catch(() => toast.error('Ceva nu a funcționat!'))
      .finally(() => { 
        closeModal()
        setCaseName('')
        router.refresh()
      })
    }
  }

  const handleInputChange = (event: any) => {
    setCaseName(event.target.value);
  };

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
      <div className="flex justify-center items-center flex-col gap-4">
        <div className="w-full">
          <ChakraProvider>
            <Input variant='outline' value={caseName} onChange={handleInputChange} placeholder='Introdceți un nume pentru caz' />
          </ChakraProvider>
        </div>
        <div className="flex gap-4">
          <button onClick={() => openNewCase(caseName)} className="px-4 py-2 bg-green-500 text-white rounded-md">Deschide un caz cu numele: {caseName}</button>
          <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded-md">X Închide fereastra</button>
        </div>
      </div>
    </ReactModal>
  );
};

export default NewCaseModal;
