import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { setSearchedQuery } from '@/redux/jobSlice';
import { useDispatch } from 'react-redux';

const filterData = [
    {
        filterType: 'Location',
        array: ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad"]
    },
    {
        filterType: 'Job Role',
        array: ["Frontend Developer", "Backend Developer", "Data Scientist", "Machine Learning Engineer"]
    },
    {
        filterType: 'Job Type',
        array: ["Full Time", "Part Time", "Internship"]
    },
    // {
    //     filterType: 'Experience',
    //     array: ["0-1", "1-2", "2-3", "3-4", "4-5"]
    // },
    // {
    //     filterType: 'Salary',
    //     array: ["0-6 LPA", "6-10 LPA", "10-15 LPA", "15+ LPA"]
    // },
]

function FilterCard() {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    }

    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue]);

  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>           {/*J.S. has onValueChange Function for radio buttons*/}
        {
            filterData.map((data, index) => (
                <div key={index}>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    {
                        data.array.map((item, idx) => {
                            const itemId = `id${index}-${idx}` //we can generate unique key for each item anyhow.
                            return (
                                <div key={itemId} className='flex items-center space-x-2 my-2'>
                                    <RadioGroupItem value={item} id={itemId} className='w-3 h-3'/>
                                    <label htmlFor={itemId} className='cursor-pointer'>{item}</label>
                                </div>
                            )
                        })
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
