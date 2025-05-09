import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import Footer from './shared/Footer';
import { motion } from 'framer-motion';

// const randomJobs = [1, 2, 3];

function Browse() {
    useGetAllJobs();
    const {allJobs} = useSelector(store => store.job);
    const dispatch = useDispatch();

    //I want cleanUp when user leaves the page so that query value can refresh all the time
    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        }
    },[])

  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-10 mb-20'>
            <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
            <motion.div className='grid grid-cols-3 gap-4'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration:1}}
            >
                {
                    allJobs.map((job) => {
                        return (
                            <Job key={job._id} job={job}/>
                        )
                    })
                }
            </motion.div>
        </div>
        <Footer/>
    </div>
  )
}

export default Browse
