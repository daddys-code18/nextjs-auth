// "use client"
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Axios } from "axios";
// import React, { useState } from 'react'

// const onLigin= () => {
//   const [user,setUser]=useState({
//     email:"",
//     password:"",
//   })
//   const onLogin =()=>{

//   }
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//     <h1 className="text-center text-white text-2xl py-3">Login</h1>
//     <hr />
//   <label htmlFor="email" className="py-2">Email</label>
    
//     <input type="text" id="email" className="py-4 mb-4 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
//     value={user.email} 
//     onChange={(e)=>setUser({...user,email: e.target.value})}
//     placeholder="Please Enter Email"/>


//      <label htmlFor="password" className="py-2">Password</label>
//     <input type="password" id="" className="py-4 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
//     value={user.password} 
//     onChange={(e)=>setUser({...user,password: e.target.value})}
//     placeholder="Please Enter password"/>


//     <div className="py-3">
//     <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onLogin}>Login here</button>

//     </div>
//     <Link href="/signup"> Visit Signup Page</Link>
//   </div>
//   )
// }

// export default onLigin;
"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";





export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            // console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            // console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "Processing" : "Login"}</h1>
        <hr />
        
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
            <Link href="/signup">Visit Signup page</Link>
        </div>
    )

}