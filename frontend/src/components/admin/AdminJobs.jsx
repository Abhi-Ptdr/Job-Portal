import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'

function AdminJobs() {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]); //we want to call the function for every change in input state. means real time update in state on  every keypress in filter input field in the frontend

  return (
    <div>
      <Navbar/>
        <div className='max-w-6xl mx-auto my-10'>
            <div className="flex item-center justify-between my-5">
                <Input className='w-fit' placeholder='Filter by company, role' onChange={(e) => setInput(e.target.value)}/>
                <Button onClick={() => navigate('/admin/job/create')} className='bg-[#225966] hover:bg-[#337180] text-white cursor-pointer'>New Job</Button>
            </div>
            <AdminJobsTable/>
        </div>
    </div>
  )
}

export default AdminJobs
