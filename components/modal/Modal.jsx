// components/YourComponent.js
"use client"
import './design.css'
import React, { useState } from 'react';
import AppointmentModal from './AppointmentModal';


export default function Modal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProduct = (productData) => {
    
    console.log('Product data to save:', productData);
  };

  return (
    <div>
     
    <button className="button" onClick={handleOpenModal}>{props.title}
    </button>

      {isModalOpen && (
        <AppointmentModal appointment={props.appointment} isUpdate={props.isUpdate} onClose={handleCloseModal} onSave={handleSaveProduct} />
      )}
    </div>
  );
}
