import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    const [hidden, sethidden] = useState("password");
    const [hidden1, sethidden1] = useState("password");

    const handleRegistration = (e) => {
        e.preventDefault()
    }
    return (
        <section className="h-screen bg-[#FDF6EB] flex justify-center items-center">
            {/* <h1>LogIn </h1> */}
            <div className="bg-white w-1/3 items-center border-2 p-5 rounded-2xl text-center space-y-5">
                {/* <button className="btn bg-white border-2 border-black rounded-2xl"><FcGoogle className="text-3xl"></FcGoogle> Join with Google</button> */}
                {/* <div className="divider">OR</div> */}
                <h1 className='text-2xl font-semibold text-[#38B453]'>Registration Here to Get LogIn</h1>
                <div>
                    <form onSubmit={handleRegistration} action="" className="space-y-5">
                        <input type="text" className="w-72 rounded-xl border-2 p-2 border-black" placeholder="Enter Your Email" />
                        <div>
                            <input type={hidden} className="w-72 rounded-xl border-2 p-2 border-black" placeholder="Enter Your Password" />
                            <button onClick={() => hidden=="password" ? sethidden("text"): sethidden("password")} className='-ml-12 text-[#38B453] font-semibold absolute mt-2'>Show</button>
                        </div>
                        <div>
                            <input type={hidden1} className="w-72 rounded-xl border-2 p-2 border-black" placeholder="Re-Enter Your Password" />
                            <button onClick={() => hidden1=="password" ? sethidden1("text"): sethidden1("password")} className='-ml-12 text-[#38B453] font-semibold absolute mt-2'>Show</button>
                        </div>
                        <div>
                            <button id="Button" className="btn w-2/3 text-lg">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center gap-5">
                    <h1>Already a member of our platform? </h1>
                    <NavLink to={`/login`}><button className="text-[#38B453] font-semibold">LogIn</button></NavLink>
                </div>
            </div>

        </section>
    );
};

export default Registration;