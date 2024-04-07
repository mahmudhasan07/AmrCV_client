import React from 'react';
import { TbPhotoFilled } from 'react-icons/tb';
import { MdEmail } from "react-icons/md";
import { CiFacebook } from 'react-icons/ci';
import { FiYoutube } from "react-icons/fi";


const Footer = () => {
    return (
        <section className='p-5 border-t-2 text-black border-black'>
            <div className='flex text-2xl font-bold gap-2'>
                <TbPhotoFilled className='text-4xl'></TbPhotoFilled>
                <h1>Amr CV</h1>
            </div>
            <div className='flex my-2 justify-between'>
                <div className='w-1/4'>
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequatur nisi debitis deserunt ipsum necessitatibus reprehenderit, nemo minus voluptatem aspernatur eligendi modi molestias nesciunt quod rerum corrupti veniam suscipit iure.</h1>
                </div>
                <div>
                    <ul className='space-y-2'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-2'>
                        <li>Blogs</li>
                        <li>Get API</li>
                        <li>Documentation</li>
                    </ul>
                </div>
                <div>
                    <div className='flex text-lg'>
                        <MdEmail className='text-3xl'></MdEmail>
                        <h1>contact@amarcv.com</h1>
                    </div>
                    <div className='text-3xl flex justify-around'>
                    <CiFacebook />
                    <FiYoutube />
                    <CiFacebook />
                    <FiYoutube />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;