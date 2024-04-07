import React from 'react';

const BasicInfo = () => {
    return (
        <section>
            <h1>Enter Your Basic Information</h1>
            <form action="">
                <div>
                    <label htmlFor="">Enter Your Name</label>
                    <input type="text" className='w-72 rounded-2xl p-1 ' />
                </div>
                <div>
                    <label htmlFor="">Enter Your Name</label>
                    <input type="text" className='w-72 rounded-2xl p-1 ' />
                </div>
                <div>
                    <label htmlFor="">Enter Your Name</label>
                    <input type="text" className='w-72 rounded-2xl p-1 ' />
                </div>
            </form>
        </section>
    );
};

export default BasicInfo;