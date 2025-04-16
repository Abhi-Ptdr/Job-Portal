import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'


const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"]

function Profile() {

    const isResume = true;

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border boredr-gray-200 my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="w-24 h-24 ">
                            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="Profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Full Name</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quisquam numquam porro libero explicabo, quilorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero officia unde labore architecto iste quas! </p>
                        </div>
                    </div>
                    <Button className="text-right border-none cursor-pointer" variant="outline"><Pen/></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail/>
                        <span>patel@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact/>
                        <span>+91 1234567890</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1 className='font-bold text-lg my-2'>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            skills.length !== 0 ? skills.map((item, index) => <Badge key={index} className='text-red-700 font-bold' variant='ghost'>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <Label htmlFor="resume" className="text-md font-bold mt-5">Resume</Label>
                        {
                            isResume ? <a href="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" className='text-blue-500 w-full hover:underline cursor-pointer'>Your Resume</a> : <span> NA </span>
                        }
                    </div>
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-while rounded-2xl'>
                <h1 className='font-bold text-lg my-2'>Applied Jobs</h1>
                {/* Applications table */}
                <AppliedJobTable/>
                
            </div>
        </div>
    )
}

export default Profile
