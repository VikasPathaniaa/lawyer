import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const EditUser = () => {
    return (
        <div>
            <div className='flex justify-between px-10 items-center mt-10 border-b-2 border-[#e6eeff]-500 pb-4 '>
                <div>
                    <p className='text-2xl font-medium text-[#000000]'>User Profile</p>
                    <p className='text-[#868686] text-sm'>View and edit profile settings</p>
                </div>
                <div className='border-2 border-gray-100 flex items-center  flex-row '>
                    <div className='bg-[#0F2C64] p-2'>
                        <img src="/assets/Backarrow.png" alt="back arrow" />
                    </div>
                    <p className='font-normal text-xs text-[#7F7F7F] px-2'>Go Back</p>
                </div>
            </div>
            <div>
                <div className='mx-8 flex justify-between mt-10'>
                    <div className='flex flex-row items-center gap-6'>
                        <img src="/assets/person.png" alt="image not found" />
                        <div>
                            <p className='font-medium text-lg'>Mr. Shlok Admin</p>
                            <p className='text-[#8B8B8B] text-sm font-normal'>Verified Account</p>

                        </div>
                        <span className=" text-[#007AFF] border-2 border-[#007AFF] rounded-lg px-1 flex items-start">
                            New
                        </span>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <span className="cursor-pointer bg-[#e6eeff] p-2 rounded-full"> <img src="/assets/delete.png" alt="Image not found" /> </span>
                        <Link to="/edit-user">  <span className='p-2'>  <img src="/assets/edit.png" alt="edit Image not found" className="cursor-pointer" /></span> </Link>
                    </div>
                </div>
                <form>
                    <div className='grid grid-cols-4 w-full gap-2 px-6 my-12'>
                        <div className=''>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>First Name</label>
                            <input type='text' placeholder='John' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                        <div>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>Last Name</label>
                            <input type='text' placeholder='Doe' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                        <div>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>Email</label>
                            <input type='text' placeholder='jhondoe@gmail.com' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                        <div>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>Phone Number</label>
                            <input type='text' placeholder='+91 453875329' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                    </div>
                    <div className='grid grid-cols-4 w-full gap-2 px-6 my-12'>
                        <div className=''>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>First Line Address</label>
                            <input type='text' placeholder='John' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                        <div>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>Second Line Address</label>
                            <input type='text' placeholder='Doe' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                        <div>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>Country</label>
                            <input type='text' placeholder='jhondoe@gmail.com' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                        <div>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>State</label>
                            <input type='text' placeholder='+91 453875329' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                    </div>
                    <div className='grid grid-cols-4 w-full gap-2 px-6 my-12'>
                        <div className=''>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>District</label>
                            <input type='text' placeholder='John' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                        <div>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>Pin Code</label>
                            <input type='text' placeholder='Doe' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                        <div>
                            <label className='font-normal text-sm text-[#000000] block mb-2 '>Kyc</label>
                            <input type='text' placeholder='jhondoe@gmail.com' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                        
                    </div>
                    <div className='grid grid-cols-4 w-full gap-2 px-6 my-12'>
                        <div className=''>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>Password</label>
                            <input type='text' placeholder='John' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                        <div>
                            <label className='font-normal text-sm text-[#000000] block mb-2'>Confirm Password</label>
                            <input type='text' placeholder='Doe' className=' border-2 border-[#DADADA]-500 outline-none w-full p-2 rounded-md' />
                        </div>
                       
                        
                    </div>

                </form>
                <div className='flex gap-4 justify-end mx-10'>
                    <Button style='text-[#ADB7CA] border-2 border-[#ADB7CA] rounded-sm px-4 py-1 '>Cancle</Button>
                    <Button style='text-white  bg-[#0F2C64] rounded-sm px-4 py-1'>Save Changes</Button>
                </div>

            </div>
        </div>
    );
}

export default EditUser;
