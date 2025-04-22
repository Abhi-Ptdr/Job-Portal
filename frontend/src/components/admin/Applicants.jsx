import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';

function Applicants() {

  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector(store => store.application)  //we have name application in in applicationSlice at line 4
  //using useEffect to fetch applicants details from backend
  useEffect(() => {

    const fetchAllApplicants = async () => {
      try {
        // const jobId = ;   //we have to define params first from useParams()
        const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });

        dispatch(setAllApplicants(res.data.job))    //we are returning job in application controllers at line 100

      } catch (error) {
        console.log(error);
      }
    }
    fetchAllApplicants();
  }, []); //empty array dependency means this useeffect calls everytime whenever page loads 


  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto'>
        <h1 className='font-bold text-xl my-5 mt-10'>Applicants ({applicants?.applications?.length})</h1>
        <ApplicantsTable />
      </div>
    </div>
  )
}

export default Applicants
