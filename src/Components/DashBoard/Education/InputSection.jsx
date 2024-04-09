import React from 'react';

const InputSection = () => {
    return (
        <div id='degree'>
            <h1 className='text-xl font-semibold my-2'>Degree/Horns</h1>
            <div>
                <label htmlFor="" className='font-bold'>Enter Your University Name</label> <br />
                <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                <label htmlFor="" className='font-bold'>Enter Your Degree</label> <br />
                <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                <label htmlFor="" className='font-bold'>Enter Your Result</label> <br />
                <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                <label htmlFor="" className='font-bold'>Start Year</label> <br />
                <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                <label htmlFor="" className='font-bold'>End Year(If you are still studying then write <b>Still</b>)</label> <br />
                <input name='' type="text" className='w-96 border-2 rounded-2xl p-1 border-black ' /> <br />
                <label htmlFor="" className='font-bold'>Your Description</label> <br />
                <textarea name="" id="" className='border-2 border-black w-full rounded-2xl p-2' rows="4"></textarea>
            </div>
        </div>
    );
};

export default InputSection;