import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css"
import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";

const NavBar = () => {
    const { user, userLogOut } = useContext(Context)
    // console.log(user);
    console.log(user);
    const navigate = useNavigate()
    const handlelogout=(e)=>{
        e.preventDefault()
        userLogOut()
        .then(res=>{
            console.log("logOut");
            navigate("/")
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <section className="flex justify-around">
            <div>
                <h1 className="text-4xl">Amar CV</h1>
            </div>
            <div>
                {
                    user ?
                    <div className="flex gap-3">
                        <img src={user?.photoURL} alt=""  className="w-12 h-12 rounded-full border-2 border-black object-cover"/>
                        <h1 className="my-auto">Hello, {user?.displayName}</h1>
                        {/* <button id="loginBTN" className="btn font-semibold" onClick={handlelogout}>Log Out</button>  */}
                        <div className="bg-[#F2FE9B]">
                            <button>Account Setting</button>
                            <button>Log Out</button>

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