"use client"
import React, { useState } from 'react';
import "./ProductModal.css";


export default function AppointmentModal({ onClose, title, isUpdate, appointment = {} }) {
  const [loading, setLoading] = useState(false);

  const [formdata, setFormdata] = useState({
    appointmentId: appointment.appointmentId || '',
    doctorId:  appointment.doctorId || '',
    patientId:  appointment.patientId || '',
    dateTime:  appointment.dateTime || '',
    notes:  appointment.notes || '',
  });

  const postAppointmentAPI = async () => {
    try {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; next-auth.csrf-token=d97a483f8835ea4003c771ba2f60206143f37db0f483259965e4bfb748dd5b5c%7Cc9b9f7696941916d308e346917a41f9de720d2a708250b9307c1e6f2e258f15c");

var raw = JSON.stringify({
  ...formdata
 
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

await fetch("http://localhost:3000/api/appointments", requestOptions)
 
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert("Failed to add product");
    } finally {
      setLoading(false);
    }
  }

  const updateAppointmentAPI=async()=>{
    try {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; next-auth.csrf-token=d97a483f8835ea4003c771ba2f60206143f37db0f483259965e4bfb748dd5b5c%7Cc9b9f7696941916d308e346917a41f9de720d2a708250b9307c1e6f2e258f15c");

var raw = JSON.stringify({
  "id": appointment._id,
       ...formdata
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/appointments", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
      
  alert("data updated")
    } catch (error) {
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isUpdate) {
     updateAppointmentAPI();
    } else {
      postAppointmentAPI();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <div className="overlay active" onClick={onClose}></div>
      <div className="modal active">
        <div className="form-group">
          <label className="label">Appointment ID</label>
          <input
            className="input"
            type="text"
            value={formdata.appointmentId}
            onChange={handleChange}
            name="appointmentId"
          />
        </div>
        <div className="form-group">
          <label className="label">Doctor ID</label>
          <input
            className="input"
            type="text"
            value={formdata.doctorId}
            onChange={handleChange}
            name="doctorId"
          />
        </div>
        <div className="form-group">
          <label className="label">Patient ID</label>
          <input
            className="input"
            type="text"
            value={formdata.patientId}
            onChange={handleChange}
            name="patientId"
          />
        </div>
        <div className="form-group">
          <label className="label">Date and Time</label>
          <input
            className="input"
            type="datetime-local"
            value={formdata.dateTime}
            onChange={handleChange}
            name="dateTime"
          />
        </div>
        <div className="form-group">
          <label className="label">Notes</label>
          <input
            className="input"
            type="text"
            value={formdata.notes}
            onChange={handleChange}
            name="notes"
          />
        </div>
        <div className="button-group">
          <button className="button cancel" onClick={onClose}>
            Cancel
          </button>
          {loading ?
            <button className="button" disabled>
              ...loading
            </button>
            :
            <button className="button" onClick={handleSubmit}>
              Save
            </button>
          }
        </div>
      </div>
    </div>
  );
}


  // const raw = JSON.stringify({
      //   ...formdata
      // });

      // "id": appointment._id,
      // ...formdata