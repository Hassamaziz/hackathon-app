import Modal from '@/components/modal/Modal';
import React from 'react';
import './appointmentsTable.css';
import AppointmentsList from './appointmentsList';




export default function Page() {
 

  return (
<div>
<div className='d-flex justify-content-center mt-3'>
<h1>Appointments</h1>
</div>

<div className='d-flex justify-content-center pt-5'>
    <Modal title="Add An Appointment" />
    </div>
   <AppointmentsList/>
      
    
    </div>
  );
}
