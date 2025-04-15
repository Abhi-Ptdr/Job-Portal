import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { data } from 'react-router-dom'

const filterData = [
    {
        filterType: 'Location',
        array: ["Delhi", "Mumbai", "Bangalore", "Pune", "Chennai", "Hyderabad"]
    },
    {
        filterType: 'Experience',
        array: ["0-1", "1-2", "2-3", "3-4", "4-5"]
    },
    {
        filterType: 'Salary',
        array: ["0-1 LPA", "1-2 LPA", "2-3 LPA", "3-4 LPA", "4-5 LPA"]
    },
    {
        filterType: 'Job Type',
        array: ["Full Time", "Part Time", "Internship"]
    },
    {
        filterType: 'Company',
        array: ["TCS", "Wipro", "Accenture", "Cognizant"]
    },
]

function FilterCard() {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
            filterData.map((data, index) => (
                <div>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    {
                        data.array.map((item, index) => {
                            return (
                                <div className='flex items-center space-x-2 my-2'>
                                    <RadioGroupItem value={item} className='w-3 h-3'/>
                                    <label className='cursor-pointer'>{item}</label>
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
