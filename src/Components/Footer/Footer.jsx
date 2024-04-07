import React from 'react';
import { TbPhotoFilled } from 'react-icons/tb';
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <section>
            <div>
                <TbPhotoFilled className='text-4xl'></TbPhotoFilled>
                <h1>Amr CV</h1>
            </div>
            <div>
                <div>
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequatur nisi debitis deserunt ipsum necessitatibus reprehenderit, nemo minus voluptatem aspernatur eligendi modi molestias nesciunt quod rerum corrupti veniam suscipit iure.</h1>
                </div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Blogs</li>
                        <li>Get API</li>
                        <li>Documentation</li>
                    </ul>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;