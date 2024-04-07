import React, { useState } from 'react';
import noimage from "../../../../public/no-profile.png"

const BasicInfo = () => {
    const [image, setimage] = useState(noimage);
    return (
        <section>
            <h1>Enter Your Basic Information</h1>
            <form action="">
                <div>
                    <label htmlFor="">Enter Your Name</label>
                    <input type="text" className='w-72 rounded-2xl p-1 ' />
                </div>
                <div>
                    <label htmlFor="">Enter Your email</label>
                    <input type="text" className='w-72 rounded-2xl p-1 ' />
                </div>
                <div>
                    <label htmlFor="">Enter Your Address</label>
                    <input type="text" className='w-72 rounded-2xl p-1 ' />
                </div>
                <div>
                    <label htmlFor="">Upload Your Image</label>
                    <img src={image} className='' alt="" />
                    <input type="text" className='w-72 rounded-2xl p-1 ' />
                </div>

            </form>
        </section>
    );
};

export default BasicInfo;