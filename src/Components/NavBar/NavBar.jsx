import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
        <section className="flex justify-around">
            <div>
                <h1>Amar CV</h1>
            </div>
            <div>
                <NavLink to={'/login'}><button id="loginBTN" className="btn hover:border-2 hover:border-black">LogIn</button></NavLink>
            </div>
        </section>
    );
};

export default NavBar;