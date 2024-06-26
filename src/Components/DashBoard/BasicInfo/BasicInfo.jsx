import React, { useState } from 'react';
import noimage from "../../../../public/no-profile.png"

const BasicInfo = () => {
    const [image, setimage] = useState(noimage);
    const [hostImage, sethostImage] = useState();

    function handleimage(e) {
        e.preventDefault()
        const image = e.target.files[0]
        sethostImage(image)
        const localHost = URL.createObjectURL(image)
        setimage(localHost)
    }

    const handleBasicInfo = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const address = from.address.value
        const occupation = from.occupation.value
        const data = {name, email,address,occupation}

        // const 
    }

    return (
        <section className='px-16 my-3 '>
            <div className='flex justify-end font-extrabold text-xl'>
                <button onClick={() => document.getElementById("modal1").close()} className=''>X</button>
            </div>
            <h1 className='text-3xl font-semibold my-3'>Enter Your Basic Information</h1>
            <form onSubmit={handleBasicInfo} action="" className='text-lg'>
                <div>
                    <label htmlFor="" className='font-bold'>Enter Your Name</label> <br />
                    <input name='name' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' />
                </div>
                <div>
                    <label htmlFor="" className='font-bold'>Enter Your email</label> <br />
                    <input type="email" name='email' className='w-96 border-2 rounded-2xl p-1  border-black' />
                </div>
                <div>
                    <label htmlFor="" className='font-bold'>Enter Your Address</label> <br />
                    <input type="text" name='address' className='w-96 border-2 rounded-2xl p-1 border-black' />
                </div>
                <div>
                    <label htmlFor="" className='font-bold'>What you are doing now?</label> <br />
                    <input type="text" name='occupation' className='w-96 border-2 rounded-2xl p-1 border-black' />
                </div>
                <div>
                    <label htmlFor="" className='font-bold'>Upload Your Image</label>
                    <img src={image} className='w-48 h-48 rounded-full object-contain border-2 border-gray-700 mx-auto' alt="" />
                    <input onChange={handleimage} type="file" className='w-96 rounded-2xl  p-1 ' />
                </div>

            </form>
        </section>
    );
};

export default BasicInfo;