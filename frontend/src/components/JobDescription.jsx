import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { toast } from 'sonner';

function JobDescription() {
  // const isApplied = true;
  const param = useParams();
  const jobId = param.id;
  const {singleJob} = useSelector((store) => store.job);
  const {user} = useSelector((store) => store.auth);

  const isInitiallyApplied = singleJob?.applications?.some(application=>application.applicant === user?._id) || false;
  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const applyJobhandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
      if(res.data.success){
        setIsApplied(true);
        const updateSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]} //update the number of applicants
        dispatch(setSingleJob(updateSingleJob));  //real time update in no. of applicants 
        toast.success(res.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  const dispatch = useDispatch();
    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id)); //ensure the state is in sync with fetched data
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
          <div className='flex items-center gap-2 mt-4'>
            <Badge className='text-blue-700 font-bold rounded-full' variant='ghost'>{singleJob?.position} Positions</Badge>
            <Badge className='text-[#F83002] font-bold rounded-full' variant='ghost'>{singleJob?.jobType}</Badge>
            <Badge className='text-[#7209B7] font-bold rounded-full' variant='ghost'>{singleJob?.salary} LPA</Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobhandler}
          className={`mt-4 text-white rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#6A38C2] hover:bg-[#5B30A6]'}`}>
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4 mt-2'>Job Description</h1>
      <div className='my-4'>
        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
        <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experienceLevel}</span></h1>
        <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary} LPA</span></h1>
        <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications.length}</span></h1>
        <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split('T')[0]}</span></h1>
      </div>
    </div>
  )
}

export default JobDescription
