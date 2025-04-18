import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'

function CompanyCreate() {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true           //this is for authentication
            });
            if(res?.data?.success){                         //success status 201 at line 24 in companyController.js
                dispatch(setSingleCompany(res.data.company)); //to do this we had create companySlice and include it in store.
                toast.success(res.data.message);            //this message companyController.js line 25
                const companyId = res?.data?.company?._id;    //because we are returning company in register company controller at backend companyController.js line 26
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto'>
                <div className="my-10">
                    <h1 className='font-bold text-2xl'>Your Comapany Name</h1>
                    <p className='text-gray-500'>What would you like to give your comapany name? You can change this later.</p>
                </div>

                <Label>Company Name</Label>
                <Input
                    type='text'
                    className='my-2'
                    placeholder='JobHunt, Microsoft'
                    onChange={(e) => setCompanyName(e.target.value)}
                />

                <div className='flex items-center gap-2 my-10'>
                    <Button variant='outline' className='cursor-pointer' onClick={() => navigate('/admin/companies')}>Cancel</Button>
                    <Button onClick={registerNewCompany} className='bg-black text-white cursor-pointer'>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate
