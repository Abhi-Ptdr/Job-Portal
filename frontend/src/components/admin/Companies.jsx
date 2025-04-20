import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { setSearchCompanyByText } from '@/redux/companySlice'
import { useDispatch } from 'react-redux'

function Companies() {
  useGetAllCompanies();
  const navigate = useNavigate();
  
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input]); //we want to call the function for every change in input state. means real time update in state on  every keypress in filter input field in the frontend

  return (
    <div>
      <Navbar/>
        <div className='max-w-6xl mx-auto my-10'>
            <div className="flex item-center justify-between my-5">
                <Input className='w-fit' placeholder='Filter by name' onChange={(e) => setInput(e.target.value)}/>
                <Button onClick={() => navigate('/admin/companies/create')} className='bg-black text-white cursor-pointer'>New Company</Button>
            </div>
            <CompaniesTable/>
        </div>
    </div>
  )
}

export default Companies
