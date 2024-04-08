import React, { useState } from 'react';
import noimage from "../../../../public/no-profile.png"

const BasicInfo = () => {
    const [image, setimage] = useState(noimage);
    return (
        <section className='p-5'>
            <h1 className='text-3xl font-semibold my-5'>Enter Your Basic Information</h1>
            <form action="" className='text-lg'>
                <div>
                    <label htmlFor="">Enter Your Name</label> <br />
                    <input type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                </div>
                <div>
                    <label htmlFor="">Enter Your email</label> <br />
                    <input type="text" className='w-80 border-2 rounded-2xl p-1  border-black' />
                </div>
                <div>
                    <label htmlFor="">Enter Your Address</label> <br />
                    <input type="text" className='w-80 border-2 rounded-2xl p-1 border-black' />
                </div>
                <div>
                    <label htmlFor="">Upload Your Image</label>
                    <img src={image} className='w-40 mx-auto' alt="" />
                    <input type="file" className='w-80 rounded-2xl p-1 ' />
                </div>

            </form>
        </section>
    );
};

export default BasicInfo;