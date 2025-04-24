import React, { use, useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'
import { setLoading } from '@/redux/authSlice'

function Signup() {

    const [input, setInput] = React.useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, user } = useSelector((state) => state.auth);

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
    if(user){
        navigate("/");  //if user is already logged in he should not go to the signup page by typing the route like http://localhost:5173/signup
    }
    },[])

    return (
        <div>
            <Navbar />
            <div className='flex item-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className="font-bold text-xl mb-5">Sign Up</h1>
                    <div className="my-3">
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            onChange={changeEventHandler}
                            name="fullname"
                            placeholder="Enter your name"
                            className="my-2"
                        />
                    </div>
                    <div className="my-3">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            name="email"
                            placeholder="xyz@gmail.com"
                            className="my-2"
                        />
                    </div>
                    <div className="my-3">
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            onChange={changeEventHandler}
                            name="phoneNumber"
                            placeholder="9876543210"
                            className="my-2"
                        />
                    </div>
                    <div className="my-3">
                        <Label>Password</Label>
                        <Input
                            type="Password"
                            value={input.password}
                            onChange={changeEventHandler}
                            name="password"
                            placeholder="password"
                            className="my-2"
                        />
                    </div>
                    <div className="flex item-center justify-between">
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    value="student"
                                    name="role"
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                    className='cursor-pointer'
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    value="recruiter"
                                    name="role"
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    className='cursor-pointer'
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className="flex items-center gap-2">
                            <Label>Profile:</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    {
                        loading ? <Button className='w-full bg-[#6A38C2] hover:bg-[#5B30A6] text-white'><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button> : <Button type="submit" className="w-full bg-[#6A38C2] hover:bg-[#5B30A6] text-white">Sign Up</Button>
                    }
                    <span className='text-sm mt-5'>Already have an account? <Link to="/login" className='text-blue-600 mt-5'>Login</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Signup
