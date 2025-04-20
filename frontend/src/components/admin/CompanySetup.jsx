import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import useGetCompanyById from '@/hooks/useGetCompanyById'

function CompanySetup() {
  const params = useParams();
  useGetCompanyById(params.id);

  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null
  });
  
  const { singleCompany } = useSelector(store => store.company);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });  //... spread operator means input remains as it was and aditional changes are added if there is any 
  }

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  }

  const submitHandler = async (e) => {
    e.preventDefault();         //to prevent reloading/refreshing of page on submit
    const formData = new FormData();
    formData.append('name', input.name);
    formData.append('description', input.description);
    formData.append('website', input.website);
    formData.append('location', input.location);
    if (input.file) {
      formData.append('file', input.file);
    }
    try {
      setLoading(true);
      const companyId = params.id;
      const res = await axios.put(`${COMPANY_API_END_POINT}/update/${companyId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });

      if (res?.data?.success) {
        toast.success(res.data.message);
        navigate('/admin/companies');
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);

    } finally {
      setLoading(false);
    }
  }

  //to get filled data in the form after which user can update any or all of the field
  //useEffect runs first always no matter where it is placed

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null
    })
  }, [singleCompany]);

  return (
    <div>
      <Navbar />
      <div className='max-w-xl mx-auto my-10'>
        <form onSubmit={submitHandler}>
          <div className='flex items-center gap-5 p-8'>
            <Button onClick={() => navigate('/admin/companies')} className='flex items-center gap-2 text-gray-500 font-semibold' variant='outline'>
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className='font-bold text-xl'>Company Setup</h1>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label>Company Name</Label>
              <Input
                className='my-2'
                type='text'
                name='name'
                value={input.name}  //here input is usestate varible
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                className='my-2'
                type='text'
                name='description'
                value={input.description}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Website</Label>
              <Input
                className='my-2'
                type='text'
                name='website'
                value={input.website}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                className='my-2'
                type='text'
                name='location'
                value={input.location}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label>Logo</Label>
              <Input
                className='my-2'
                type='file'
                accept='image/*'  //this means all image extantions are allowed jpg, png etc
                onChange={changeFileHandler}
              />
            </div>
          </div>
          {
            loading ? <Button className='w-full bg-black text-white mt-5'><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button> : <Button type="submit" className="w-full bg-black text-white mt-5">Update</Button>
          }
        </form>
      </div>
    </div>
  )
}

export default CompanySetup
