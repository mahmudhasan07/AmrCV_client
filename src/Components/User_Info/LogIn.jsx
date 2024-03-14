import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Login.css"
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";


const LogIn = () => {
    const {userLogin} = useContext(Context)
    // console.log(data);
    const [hidden, sethidden] = useState("password");
    const navigate =  useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        // console.log(email,password);
        userLogin(email,password)
        .then(res=>{
            navigate("/")
        })
        .catch(err=>{
            console.log(err.message);
        })

    }
    return (
        <section className="h-screen bg-[#FDF6EB] flex justify-center items-center">
            {/* <h1>LogIn </h1> */}
            <div className="bg-white w-1/3 items-center border-2 p-5 rounded-2xl text-center space-y-5">
                <button className="btn bg-white border-2 border-black rounded-2xl"><FcGoogle className="text-3xl"></FcGoogle> Join with Google</button>
                <div className="divider">OR</div>
                <div>
                    <form action="" onSubmit={handleLogin} className="space-y-5">
                        <input name="email" type="text" className="w-72 rounded-xl border-2 p-2 border-black" placeholder="Enter Your Email" />
                        <div>
                            <input name="password" type={hidden} className="w-72 rounded-xl border-2 p-2 border-black" placeholder="Enter Your Password" />
                            <button onClick={() => hidden == "password" ? sethidden("text") : sethidden("password")} className='-ml-12 text-[#38B453] font-semibold absolute mt-2'>Show</button>
                        </div>
                        <div className="z-50 relative">
                            <button id="Button" className="btn w-2/3 z-50 text-lg"><span className="z-50">LogIn</span></button>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center gap-5">
                    <h1>New to our platform?  </h1>
                    <NavLink to={`/registration`}><button className="text-[#38B453] font-semibold">Sign Up</button></NavLink>
                </div>
            </div>

        </section>
    );
};

export default LogIn;