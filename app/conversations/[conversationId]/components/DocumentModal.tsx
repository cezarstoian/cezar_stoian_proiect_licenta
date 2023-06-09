'use client';

import React, { useCallback, useState } from 'react';
import ReactModal from 'react-modal';
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDropzone } from 'react-dropzone';
import { UploadedFile } from '@/app/types';

interface DocumentModalProps {
  isOpen: boolean,
  closeModal: any,
  conversationId: string,
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

const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen, 
  closeModal,
  conversationId,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [bufferFiles, setBufferFiles] = useState<Buffer[]>([])

  const fileReset = () => {
    setUploadedFiles([])
    setBufferFiles([])
  }

  const fileUpload = (filename: string, document: ArrayBuffer, conversationId: string) => {
    const formData = new FormData();
    formData.append("filename", filename)
    formData.append("conversationId", conversationId)
    formData.append("document", new Blob([document])) // convert arrayBuffer to blob

    axios.post('/api/aws', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(() => toast.success('Fisier incarcat'))
    .catch(() => toast.error('Ceva nu a funcționat la trimiterea fișierului'))

    const message = null
    const messageBody = { message, filename, conversationId}

    axios.post('/api/messages', messageBody)
    .then(() => {
      toast.success('Mesaj creat')
      fileReset()
    })
    .catch(() => toast.error('Ceva nu a funcționat la crearea mesajului'))
    .finally(closeModal)
  }

  const onDrop = (acceptedFiles: any) => {
    setUploadedFiles(acceptedFiles)

    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        const buffer = reader.result;
        console.log('Buffer', buffer);
        setBufferFiles(buffer)
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input {...getInputProps()} />
          {isDragActive ? <p>Pune fișierele aici...</p> : <p>Trage fișierele aici sau apasă pentru a selecta fișierele</p>}
          
          {uploadedFiles.length > 0 && (
            <div>
              <h4>Fișiere Încărcate:</h4>
              <ul>
                {uploadedFiles.map((file) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex space-x-4">
          <button onClick={() => fileReset()} className="px-4 py-2 bg-red-500 text-white rounded-md">Resetează fișierul</button>
          <button onClick={() => fileUpload(uploadedFiles[0].name, bufferFiles, conversationId)} className="px-4 py-2 bg-green-500 text-white rounded-md">Trimite fișierul</button>
          <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded-md">X Închide fereastra</button>
        </div>
      </div>
    </ReactModal>
  );
};

export default DocumentModal;
