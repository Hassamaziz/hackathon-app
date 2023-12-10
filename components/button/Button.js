"use client"
import React from 'react'
import'../modal/design.css'

export default function Button(props) {
  const deleteHandler=async()=>{
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; next-auth.csrf-token=d97a483f8835ea4003c771ba2f60206143f37db0f483259965e4bfb748dd5b5c%7Cc9b9f7696941916d308e346917a41f9de720d2a708250b9307c1e6f2e258f15c");
      
      var raw = JSON.stringify({
        "id": props.id
      });
      
      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/api/appointments", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      alert("data deleted")
    } catch (error) {
      
    }
      }
  return (
  <button className='button' onClick={deleteHandler} >Delete</button>
  )
}
