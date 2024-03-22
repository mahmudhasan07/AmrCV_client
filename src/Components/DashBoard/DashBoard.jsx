import React from 'react';
import { IoPerson } from "react-icons/io5";
import { VscEye } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { PiNoteFill } from "react-icons/pi";




const DashBoard = () => {
    return (
        <section>
            <div className='bg-[#F6FFA1] w-72 p-3 rounded-xl border-2 border-black'>
                <div className='flex text-2xl font-semibold justify-center my-5'>
                    <IoPerson className='text-3xl my-auto'></IoPerson>
                    <h1>Personal Info</h1>
                </div>
                <div className='flex justify-around my-2'>
                    <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                    <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                </div>
            </div>
            <div className='bg-[#F6FFA1] w-72 p-3 rounded-xl border-2 border-black'>
                <div className='flex text-2xl font-semibold justify-center my-5'>
                    <PiNoteFill className='text-3xl my-auto'></PiNoteFill>
                    <h1>Education Info</h1>
                </div>
                <div className='flex justify-around my-2'>
                    <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                    <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                </div>
            </div>
            <div className='bg-[#F6FFA1] w-72 p-3 rounded-xl border-2 border-black'>
                <div className='flex text-2xl font-semibold justify-center my-5'>
                    <PiNoteFill className='text-3xl my-auto'></PiNoteFill>
                    <h1>Skill Info</h1>
                </div>
                <div className='flex justify-around my-2'>
                    <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                    <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                </div>
            </div>
            <div className='bg-[#F6FFA1] w-72 p-3 rounded-xl border-2 border-black'>
                <div className='flex text-2xl font-semibold justify-center my-5'>
                    <PiNoteFill className='text-3xl my-auto'></PiNoteFill>
                    <h1>Work Experience</h1>
                </div>
                <div className='flex justify-around my-2'>
                    <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                    <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                </div>
            </div>
            <div className='bg-[#F6FFA1] w-72 p-3 rounded-xl border-2 border-black'>
                <div className='flex text-2xl font-semibold justify-center my-5'>
                    <PiNoteFill className='text-3xl my-auto'></PiNoteFill>
                    <h1>Social Presence</h1>
                </div>
                <div className='flex justify-around my-2'>
                    <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                    <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                </div>
            </div>
            <div className='bg-[#F6FFA1] w-72 p-3 rounded-xl border-2 border-black'>
                <div className='flex text-2xl font-semibold justify-center my-5'>
                    <PiNoteFill className='text-3xl my-auto'></PiNoteFill>
                    <h1>Analytics</h1>
                </div>
                <div className='flex justify-around my-2'>
                    <button className='btn border-2 border-black '><VscEye className='text-lg'></VscEye>View</button>
                    <button className='btn border-2 border-black '><CiEdit className='text-lg'></CiEdit>Edit</button>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;