"use client"
import { useEffect, useState } from 'react';
import './appointmentsTable.css';


import React from 'react'
import Modal from '@/components/modal/Modal';
import Button from '@/components/button/Button';

export default function AppointmentsList() {
    const [data, setData] = useState([]);

    
const fetchAppointments = async()=>{

    const response = await fetch("https://hackathon-app-eight.vercel.app/api/appointments")
    const result = await response.json()
    setData(result.appointments);
}

useEffect(() => {
  
fetchAppointments();
 
}, [])
  return (
    <div className='container d-flex justify-content-center pt-3'>
    <table className="table">
          <thead>
            <tr>
             
              <th>Appointment ID</th>
              <th>Doctor ID</th>
              <th>Patient ID</th>
              <th>Date and Time</th>
              <th>Notes</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
             
                <td>{item.appointmentId}</td>
                <td>{item.doctorId}</td>
                <td>{item.patientId}</td>
                <td>{item.dateTime}</td>
                <td>{item.notes}</td>
                <td><Modal appointment={item} isUpdate={true} title="Update" /></td>
                <td><Button id={item._id} /></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}


