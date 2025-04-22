import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';

const shortlistingStatus = ["Accepted", "Rejected"];

function ApplicantsTable() {

    const { applicants } = useSelector(store => store.application);

    const statusHandler = async (status, id) => {
        try {
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, {status}, {
                withCredentials:true
            });
            
            if(res.data.success){
                toast.success(res.data.message);
            }

        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader className='bg-gray-100'>
                    <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        applicants && applicants?.applications?.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell> {item?.applicant?.fullname} </TableCell>
                                <TableCell> {item?.applicant?.email} </TableCell>
                                <TableCell> {item?.applicant?.phoneNumber} </TableCell>
                                <TableCell> 
                                    {
                                        item?.applicant?.profile?.resume ? <a className='text-blue-600 cursor-pointer' href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
                                    } 
                                </TableCell>
                                <TableCell> {item?.applicant?.createdAt.split('T')[0]} </TableCell>
                                <TableCell className='text-right'>
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal className='cursor-pointer' />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32 bg-white border-gray-200">
                                            {
                                                shortlistingStatus.map((status, index) => {
                                                    return (
                                                        <div key={index} onClick={() => statusHandler(status, item._id)} className='flex w-fit items-center my-2 cursor-pointer'>
                                                            {status}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default ApplicantsTable
