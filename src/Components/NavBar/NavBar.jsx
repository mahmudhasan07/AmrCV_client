import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css"
import { useContext, useState } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import env from "react-dotenv";


const NavBar = () => {
    const { user, userLogOut } = useContext(Context)
    const [condition, setcondition] = useState(false);
    const [hide, sethide] = useState("hidden");
    // console.log(user);
    // console.log(user?.metadata?.createdAt);
    const navigate = useNavigate()
    const handlelogout = (e) => {
        e.preventDefault()
        userLogOut()
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleUser = (e) => {
        // e.target()
        setcondition(!condition)
        if (condition == false) {
            sethide("block")
        } else {
            sethide("hidden")
        }

    }
    // const role = env.VITE_API
    // console.log(role);


    console.log(condition);
    return (
        <section className="flex justify-around border-b-2 border-black lg:mx-10 mx-7 py-2">
            <div>
                <h1 className="text-4xl">Amar CV</h1>
            </div>
            <div>
                {
                    user ?
                        <div className="flex gap-3">
                            <img onClick={handleUser} src={user?.photoURL} alt="" className="w-12 cursor-pointer h-12 rounded-full border-2 border-black object-cover" />
                            <h1 className="my-auto">Hello, {user?.displayName}</h1>
                            {/* <button id="loginBTN" className="btn font-semibold" onClick={handlelogout}>Log Out</button>  */}
                            <div className={`bg-[#F2FE9B] p-3 rounded-xl absolute top-14 text-lg font-semibold ${hide}`}>
                                <button onClick={() => navigate(`/${user?.metadata?.createdAt}`)} className="flex"><IoMdSettings className="text-2xl my-auto"></IoMdSettings>Account Setting</button>
                                <hr className="my-2 border-black" />
                                <button onClick={() => userLogOut()} className="flex"><IoLogOut className="text-2xl my-auto"></IoLogOut>Log Out</button>

                            </div>
                        </div>
                        :
                        <NavLink to={'/login'}><button id="loginBTN" className="btn hover:border-2 hover:border-black">LogIn</button></NavLink>
                }
            </div>
        </section>
    );
};

export default NavBar;