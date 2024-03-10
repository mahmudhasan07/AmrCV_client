import { useState } from "react";
import { FcGoogle } from "react-icons/fc";


const LogIn = () => {
    const [hidden, sethidden] = useState("text");
    const [hidden1, sethidden1] = useState("text");
    return (
        <section className="h-screen bg-[#FDF6EB]">
            <h1>LogIn </h1>
            <div className="bg-white">
                <button className="btn bg-white border-2 border-black rounded-2xl"><FcGoogle></FcGoogle> Join with Google</button>
                <div className="divider">OR</div>
                <div>
                    <form action="">
                        <input type="text" className="w-72 rounded-xl " placeholder="Enter Your Email" />
                        <div>
                            <input type={hidden} className="w-72 rounded-xl " placeholder="Enter Your Password" />
                        </div>
                        <div>
                            <input type={hidden1} className="w-72 rounded-xl " placeholder="Re-Enter Your Password" />
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default LogIn;