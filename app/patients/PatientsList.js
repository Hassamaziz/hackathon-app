"use client"
import { useEffect, useState } from 'react';
import '../createAppointments/appointmentsTable.css';
import React from 'react';

export default function PatientsList() {
  const [data, setData] = useState([]);

  const fetchPatients = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/patients");
      const result = await response.json();
      
      setData(result.patients);

    } catch (error) {
      console.error('Error fetching patients:', error.message);
    }
  }

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className='container d-flex justify-content-center pt-3'>
      <table className="table">
        <thead>
          <tr>
            
            <th>Patient ID</th>
            <th>Name</th>
            <th>Contact Details</th>
            <th>Medical History</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              
              <td>{item.patientId}</td>
              <td>{item.name}</td>
              <td>{item.contactDetails}</td>
              <td>{item.medicalHistory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
