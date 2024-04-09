import React, { useEffect, useState } from 'react';
import InputSection from './InputSection';
import './Education.css';

const Education = () => {
    const [array, setarray] = useState(["1"]);
    // console.log(array);

    const handlearray = () => {
        setarray(element => element.concat(["1"]))
        // console.log(array);
    }
    console.log(array);
    return (
        <section className='px-16 my-3'>
            <h1 className='text-3xl font-bold my-5'>Enter Your Educational Information</h1>

            {
                array.map((item, idx) => <InputSection key={idx}></InputSection>)
            }


            <div className='text-center '>
            <button onClick={handlearray} id='addEducation' className='btn text-lg font-bold'>+ Add Education</button>
            </div>
            {/* <div id='hsc'>
                <h1 className='text-xl font-semibold my-2'>HSC</h1>
                <div>
                    <label htmlFor="" className='font-bold'>Enter Your College Name</label> <br />
                    <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                    <label htmlFor="" className='font-bold'>Enter Your Background</label> <br />
                    <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                    <label htmlFor="" className='font-bold'>Enter Your Result</label> <br />
                    <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                    <label htmlFor="" className='font-bold'>Start Year</label> <br />
                    <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                    <label htmlFor="" className='font-bold'>End Year(If you are still studying then write <b>Still</b>)</label> <br />
                    <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                    <label htmlFor="" className='font-bold'>Your Description</label> <br />
                    <textarea name="" id="" className='border-2 border-black w-full rounded-2xl p-2'  rows="4"></textarea>
                </div>
            </div>
            <div id='ssc'>
                <h1 className='text-xl font-semibold my-2'>SSC</h1>
                <div>
                    <label htmlFor="" className='font-bold'>Enter Your School Name</label> <br />
                    <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                    <label htmlFor="" className='font-bold'>Enter Your Background</label> <br />
                    <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                    <label htmlFor="" className='font-bold'>Enter Your Result</label> <br />
                    <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                    <label htmlFor="" className='font-bold'>Start Year</label> <br />
                    <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                    <label htmlFor="" className='font-bold'>End Year(If you are still studying then write <b>Still</b>)</label> <br />
                    <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                    <label htmlFor="" className='font-bold'>Your Description</label> <br />
                    <textarea name="" id="" className='border-2 border-black w-full rounded-2xl p-2'  rows="4"></textarea>
                </div>
            </div> */}
        </section>
    );
};

export default Education;