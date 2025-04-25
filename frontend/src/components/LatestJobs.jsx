import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

function LatestJobs() {
  const {allJobs} = useSelector(store => store.job);
  const {user} = useSelector(store => store.auth);
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top</span> Job Openings</h1>

      <motion.div className='grid grid-cols-3 gap-4 my-5'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration:1}}
      >
        { user ? allJobs.length <= 0 ? <sapan>No Job Available</sapan> : 
        allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>) : 
        <span><Link className='text-blue-500 underline' to='/login'>Login</Link> to see latest job openings..</span>}
      </motion.div>

    </div>
  )
}

export default LatestJobs
