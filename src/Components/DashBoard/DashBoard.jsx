import React from 'react';
import { IoPerson } from "react-icons/io5";
import { VscEye } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { PiNoteFill } from "react-icons/pi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import "./dashboard.css";







const DashBoard = () => {
    return (
        <section className='text-black'>
            <div className='space-y-4 my-10'>
                <div id='dashboardCard' className='bg-[#F6FFA1] w-1/2 flex justify-between space-y-2 mx-auto py-2 px-8 rounded-xl border-2 border-black'>
                    <div className='flex gap-2 text-2xl font-semibold justify-center'>
                        <IoPerson className='text-3xl my-auto'></IoPerson>
                        <h1>Personal Info</h1>
                    </div>
                    <div className='flex justify-around gap-5'>
                        <button className=' btn border-2 border-black'><VscEye className='text-lg my-auto'></VscEye>View</button>
                        <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                    </div>
                </div>
                <div id='dashboardCard' className='bg-[#F6FFA1] w-1/2 flex justify-between mx-auto py-2 px-8 rounded-xl border-2 border-black'>
                    <div className='flex text-2xl gap-2 font-semibold justify-center'>
                        <PiNoteFill className='text-3xl my-auto'></PiNoteFill>
                        <h1>Education Info</h1>
                    </div>
                    <div className='flex justify-around gap-5'>
                        <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                        <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                    </div>
                </div>
                <div id='dashboardCard' className='bg-[#F6FFA1] w-1/2 flex justify-between mx-auto py-2 px-8  p-3 rounded-xl border-2 border-black'>
                    <div className='flex text-2xl gap-2 font-semibold justify-center '>
                        <BiSolidCategoryAlt className='text-3xl my-auto'></BiSolidCategoryAlt>
                        <h1>Skill Info</h1>
                    </div>
                    <div className='flex justify-around gap-5'>
                        <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                        <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                    </div>
                </div>
                <div id='dashboardCard' className='bg-[#F6FFA1] w-1/2 flex justify-between mx-auto py-2 px-8 rounded-xl border-2 border-black'>
                    <div className='flex text-2xl gap-2 font-semibold justify-center'>
                        <MdWorkHistory className='text-3xl my-auto'></MdWorkHistory>
                        <h1>Work Experience</h1>
                    </div>
                    <div className='flex justify-around gap-5'>
                        <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                        <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                    </div>
                </div>



                <div id='dashboardCard' className='bg-[#F6FFA1] w-1/2 flex justify-between mx-auto py-2 px-8 rounded-xl border-2 border-black'>
                    <div className='flex text-2xl gap-2 font-semibold justify-center'>
                        <IoShareSocial className='text-3xl my-auto'></IoShareSocial>
                        <h1>Social Presence</h1>
                    </div>
                    <div className='flex justify-around gap-5'>
                        <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                        <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                    </div>
                </div>
                <div id='dashboardCard' className='bg-[#F6FFA1] w-1/2 flex justify-between mx-auto py-2 px-8 rounded-xl border-2 border-black'>
                    <div className='flex text-2xl gap-2 font-semibold justify-center'>
                        <MdAnalytics className='text-3xl my-auto'></MdAnalytics>
                        <h1>Analytics</h1>
                    </div>
                    <div className='flex justify-around gap-5'>
                        <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                        <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                    </div>
                </div>
            </div>


            <div>
                <div className='w-72 border-2 space-y-10 p-2 border-black'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold'>Social Presence</h1>
                    </div>
                    <div className='flex justify-around gap-5'>
                        <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                        <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default DashBoard;