"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import React, { useState } from 'react'

const signupPage = () => {
  const [user,setUser]=useState({
    email:"",
    password:"",
    username:"",
  })
  const onSignup =()=>{

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 className="text-center text-white text-2xl py-3">SignupPage</h1>
    <hr />
    <label htmlFor="username " className="py-2">username</label>
    <input type="text" id="username" className="py-4 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
    value={user.username} 
    onChange={(e)=>setUser({...user,username: e.target.value})}
    placeholder="Please Enter Username"/>
    <label htmlFor="email" className="py-2">Email</label>
    
    <input type="text" id="email" className="py-4 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
    value={user.email} 
    onChange={(e)=>setUser({...user,email: e.target.value})}
    placeholder="Please Enter Email"/>
     <label htmlFor="password" className="py-2">Password</label>
    <input type="password" id="" className="py-4 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
    value={user.password} 
    onChange={(e)=>setUser({...user,password: e.target.value})}
    placeholder="Please Enter password"/>
    <div className="py-3">
    <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onSignup}>Signup here</button>

    </div>
  </div>
  )
}

export default signupPage