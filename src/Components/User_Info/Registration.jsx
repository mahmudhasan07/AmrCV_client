import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../ContextAPI/ContextAPI';

const Registration = () => {
    const { userSign, userLogout, updateUser } = useContext(Context)
    const [hidden, sethidden] = useState("password");
    const [hidden1, sethidden1] = useState("password");
    const [unmatch, setunmatch] = useState();

    const handleRegistration = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password1 = from.password1.value
        const password2 = from.password2.value
        const image = from.image.files[0]
        console.log(image);
        if (password1 == password2) {
            
            // userSign(email, password1)
            //     .then(res => {
            //         console.log(res);
            //         updateUser(name, photo)
            //             .then(res => {
            //                 console.log(res);
            //             })
            //             .catch(error => {
            //                 console.log(error);
            //             })
            //     })
            //     .catch(error => {
            //         console.log(error.message);
            //     })
            setunmatch("")
        } else {
            setunmatch("Your password doesn't match")
        }
    }
    return (
        <section className="h-screen bg-[#FDF6EB] flex justify-center items-center">
            {/* <h1>LogIn </h1> */}
            <div className="bg-white w-1/3 items-center border-2 p-5 rounded-2xl  space-y-5">
                {/* <button className="btn bg-white border-2 border-black rounded-2xl"><FcGoogle className="text-3xl"></FcGoogle> Join with Google</button> */}
                {/* <div className="divider">OR</div> */}
                <h1 className='text-2xl font-bold text-[#38B453]'>Registration Here to Get LogIn</h1>
                <div>
                    <form onSubmit={handleRegistration} action="" className="space-y-5 mx-auto w-fit">
                        <input type="text" name='name' className="w-72 rounded-xl border-2 p-2 border-black" placeholder="Enter Your Name" required /> <br />
                        <input type="email" name='email' className="w-72 rounded-xl border-2 p-2 border-black" placeholder="Enter Your Email" required />
                        <div>
                            <label htmlFor="" className='text-lg font-semibold'>Upload Your Image</label> <br />
                            <input type="file" name='image' className="w-72 rounded-xl border-2 p-2 border-black" placeholder='Upload your image' />
                        </div>
                        <div>
                            <input type={hidden} name='password1' className="w-72 rounded-xl border-2 p-2 border-black" placeholder="Enter Your Password" required />
                            <button onClick={() => hidden == "password" ? sethidden("text") : sethidden("password")} className='-ml-12 text-[#38B453] font-semibold absolute mt-2'>Show</button>
                        </div>
                        <div>
                            <input type={hidden1} name='password2' className="w-72 rounded-xl border-2 p-2 border-black" placeholder="Re-Enter Your Password" required />
                            <button onClick={() => hidden1 == "password" ? sethidden1("text") : sethidden1("password")} className='-ml-12 text-[#38B453] font-semibold absolute mt-2'>Show</button>
                            <p className='text-red-800'>{unmatch}</p>
                        </div>
                        <div className='text-center'>
                            <button id="Button" className="btn w-2/3 text-lg"><span className='z-50'>Sign Up</span></button>
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