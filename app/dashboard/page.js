import Card from '@/components/card/DashCard'
import React from 'react'

export default function DashBoard() {
  return (
<div>
<div className='d-flex justify-content-center mt-5'>
<h1>Our Dashboard</h1>
</div>
    <div className='container d-flex justify-content-center'>
      <Card title="Appointments" value="Current Appointments" />
      <Card title="Patients" value="Current Patients" />
      <Card title="Doctors" value="Available Doctors" />
      
    </div>
    </div>
  )
}
