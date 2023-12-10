// pages/dashboard.js
"use client"
import React, { useEffect, useState } from 'react';
import DashCard from '@/components/card/DashCard';

const Dashboard = () => {
  const [appointmentsCount, setAppointmentsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/appointments'); 
        const data = await response.json();

        if (response.ok) {
          setAppointmentsCount(data.appointmentsCount);
        } else {
          console.error('Error fetching data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <DashCard  />
       
      </div>
    </div>
  );
};

export default Dashboard;
