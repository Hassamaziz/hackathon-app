// LoginButton.js
import React from 'react';
import Link from 'next/link';
import './loginbutton.css';

export default function LoginButton(props) {
  const { title, isDoctor, isPatient } = props;

  let href = '/';
  if (isDoctor) {
    href = '/doctorlogin'; 
  } else if (isPatient) {
    href = '/patientLogin'; 
  }

  return (
    <Link href={href}>
      <button className="comic-button">{title}</button>
    </Link>
  );
}
