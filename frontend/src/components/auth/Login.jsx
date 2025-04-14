import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Login() {

  const [input, setInput] = React.useState({
    email: "",
    password: "",
    role: ""
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <div>
      <Navbar />
      <div className='flex item-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-3">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              onChange={changeEventHandler}
              name="email"
              placeholder="xyz@gmail.com"
              className="my-2"
            />
          </div>
          <div className="my-3">
            <Label>Password</Label>
            <Input
              type="Password"
              value={input.password}
              onChange={changeEventHandler}
              name="password"
              placeholder="password"
              className="my-2"
            />
          </div>
          <div className="flex item-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  value="student"
                  name="role"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  value="recruiter"
                  name="role"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full bg-[#6A38C2] hover:bg-[#5B30A6] text-white">Login</Button>
          <span className='text-sm mt-5'>Don't have an account? <Link to="/signup" className='text-blue-600 mt-5'>Sign Up</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login
